import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { RouterModule } from '@angular/router'
import { shareReplay } from 'rxjs'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

@Component({
  selector: 'app-take-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDatepickerModule],
  templateUrl: './take-appointment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TakeAppointmentComponent {

  aptRepo = inject(AppointmentRepository)

  selected: Date | null = this.aptRepo.store.getValue().datePicked

  fromAlmost$ = this.aptRepo.fromAlmost$.pipe(shareReplay())

}
