import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { shareReplay } from 'rxjs'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

@Component({
  selector: 'app-almost-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './almost-appointment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlmostAppointmentComponent {

  aptRepo = inject(AppointmentRepository)
  date$ = this.aptRepo.datePicked$.pipe(shareReplay())

}
