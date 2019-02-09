import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// TODO: Luego ver si es necesario quitar este time
setTimeout( () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error('Loading Page',err));
}, 1500);
