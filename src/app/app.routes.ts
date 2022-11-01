import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.routes').then(r => r.goalsRoutes)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
]