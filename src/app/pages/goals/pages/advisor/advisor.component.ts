import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './advisor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorComponent {

  aptRepo = inject(AppointmentRepository)

}
