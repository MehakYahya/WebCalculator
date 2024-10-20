import { bootstrapApplication } from '@angular/platform-browser';
// @ts-ignore
import { appConfig } from './app/app.config';
// @ts-ignore
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
