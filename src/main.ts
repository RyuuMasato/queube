import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app/components/app.component';
import {FirebaseService} from 'ng2-firebase/core';
import {QueueService} from './shared/services/queue.service';

declare var Firebase;
declare var SC: any;

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(FirebaseService, {useFactory: () => new FirebaseService(new Firebase('https://queube.firebaseio.com/'))}),
  QueueService,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' }),
]);

// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ',    registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
