import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//{platformNativescriptDynamic} for mobile applications

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
