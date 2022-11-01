import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

@Component({
  selector: 'app-verify-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './verify-appointment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyAppointmentComponent {

  aptRepo = inject(AppointmentRepository)

}
