import { HttpClientModule } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { MatNativeDateModule } from '@angular/material/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { devTools } from '@ngneat/elf-devtools'
import { AppComponent } from './app/app.component'
import { routes } from './app/app.routes'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
} else {
  devTools()
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NoopAnimationsModule, MatNativeDateModule, HttpClientModule)
  ]
})