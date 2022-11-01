import { CommonModule, Location } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { getRegistry } from '@ngneat/elf'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: 'goals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent {

  repo = inject(AppointmentRepository)
  loc = inject(Location)

  resetStore(): void {
    getRegistry().get('appointment')?.reset()
  }

  ngOnInit() {
    this.loc.subscribe(({ url }: any) => this.repo.updateLastPos(url?.split('/')[2]))
  }

}
