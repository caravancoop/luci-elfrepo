import { inject } from '@angular/core'
import { CanActivateFn, Router, Routes } from '@angular/router'
import { map, zip } from 'rxjs'
import { AppointmentRepository } from 'src/app/repositories/appointment.repository'

export const goalsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./goals.component').then(c => c.GoalsComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'take-appointment'
      },
      {
        path: 'take-appointment',
        loadComponent: () => import('./pages/take-appointment/take-appointment.component').then(c => c.TakeAppointmentComponent),
        canActivate: [goalsGuard()],
        title: 'Take'
      },
      {
        path: 'verify-appointment',
        loadComponent: () => import('./pages/verify-appointment/verify-appointment.component').then(c => c.VerifyAppointmentComponent),
        canActivate: [goalsGuard()],
        title: 'Verify'
      },
      {
        path: 'advisor',
        loadComponent: () => import('./pages/advisor/advisor.component').then(c => c.AdvisorComponent),
        canActivate: [goalsGuard()],
        title: 'Advisor'
      },
      {
        path: 'almost-appointment',
        loadComponent: () => import('./pages/almost-appointment/almost-appointment.component').then(c => c.AlmostAppointmentComponent),
        canActivate: [goalsGuard()],
        title: 'Almost'
      }
    ]
  },
]


function goalsGuard(): CanActivateFn {
  return (route, { url }) => {
    const repo = inject(AppointmentRepository)
    const router = inject(Router)
    const lastPos$ = repo.lastPos$
    const datePicked$ = repo.datePicked$

    return zip(lastPos$, datePicked$).pipe(
      map(([lastPos, datePicked]) => {
        if (!datePicked) {
          if (!url.includes('take')) {
            return router.createUrlTree(['goals', 'take-appointment'])
          }
        } else {
          if (lastPos && !url.includes(lastPos)) {
            return router.createUrlTree(['goals', lastPos])
          }
        }
        return true
      })
    )


  }
}