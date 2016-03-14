import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {SoundCloudService} from '../../shared/services/soundcloud.service';
import {QueueService} from '../../shared/services/queue.service';
import {PlayerComponent} from './player.component';
import {RouteParams} from 'angular2/router';
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, PlayerComponent]
})

export class HomeComponent {
  streamIsPlaying : boolean;
  private currentStream;
  private currentTrack;
  constructor(public queueService: QueueService, public soundCloudService: SoundCloudService, routeParams : RouteParams) {
    console.log(this.currentStream);
    this.queueService.setQueue(routeParams.get('session'));
    this.queueService.get().subscribe((tracks) => {
      this.currentTrack = tracks[0];
    });
  }

  public play() {
    if(! this.streamIsPlaying) {
      this.soundCloudService.getStream(this.currentTrack).then((player) => {
        this.currentStream = player;
        player.play();
      });
    } else {
      this.currentStream.pause();
    }
    this.streamIsPlaying = !this.streamIsPlaying;
  }

  addTrack(trackUrl) {
    this.soundCloudService.getTrack(trackUrl)
      .then(track => {
        track.created_at = new Date();
      this.currentTrack = track;
      this.queueService.add(track);
    });

  }
}
