import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Import your routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Make sure routes are provided
  ]
})
.catch(err => console.error(err));
