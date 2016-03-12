import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {QueueService} from '../../shared/services/queue.service';
import {SoundCloudService} from '../../shared/services/soundcloud.service';


@Component({
  selector: 'sd-app',
  viewProviders: [QueueService, SoundCloudService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/:session',      name: 'Home',  component: HomeComponent  }
])
export class AppComponent {}
