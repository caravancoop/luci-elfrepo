import { Injectable } from '@angular/core'
import { createStore, select, setProp, withProps } from '@ngneat/elf'
import {
  localStorageStrategy, persistState
} from '@ngneat/elf-persist-state'
import { Observable } from 'rxjs'

interface AppointmentProps {
  lastPos: 'take-appointment' | 'verify-appointment' | 'advisor' | 'almost-appointment'
  datePicked: Date | null
  fromAlmost: boolean
}

@Injectable({ providedIn: 'root' })
export class AppointmentRepository {

  store
  lastPos$: Observable<AppointmentProps['lastPos']>
  datePicked$: Observable<AppointmentProps['datePicked']>
  fromAlmost$: Observable<AppointmentProps['fromAlmost']>

  constructor() {
    this.store = this.createStore()
    this.lastPos$ = this.store.pipe(select(store => store.lastPos))
    this.datePicked$ = this.store.pipe(select(store => store.datePicked))
    this.fromAlmost$ = this.store.pipe(select(store => store.fromAlmost))
    const persist = persistState(this.store, {
      key: 'appointment',
      storage: localStorageStrategy,
    })
  }

  updateLastPos(lastPos: AppointmentProps['lastPos']) {
    this.store.update(setProp('lastPos', lastPos))
  }

  updateDatePicked(datePicked: AppointmentProps['datePicked']) {
    this.store.update(setProp('datePicked', datePicked))
  }

  updateFromAlmost(fromAlmost: AppointmentProps['fromAlmost']) {
    this.store.update(setProp('fromAlmost', fromAlmost))
  }







  private createStore(): typeof store {
    const store = createStore({ name: 'appointment' },
      withProps<AppointmentProps>({ lastPos: 'take-appointment', datePicked: null, fromAlmost: false }))

    return store
  }

}
