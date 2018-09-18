import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(init => console.log('init AppModule-->', init))
  .catch(err => console.log(err));

  platformBrowserDynamic().bootstrapModule(HeaderComponent)
  .then(init => console.log('init HeaderComponent-->', init))
  .catch(err => console.log(err));

  platformBrowserDynamic().bootstrapModule(FooterComponent)
  .then(init => console.log('init FooterComponent-->', init))
  .catch(err => console.log(err));

