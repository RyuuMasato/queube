import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {SoundCloudService} from '../../shared/services/soundcloud.service';
import {NameListService} from '../../shared/services/name-list.service';
import {PlayerComponent} from './player.component';

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
  constructor(public nameListService: NameListService, public soundCloudService: SoundCloudService) {
    console.log(this.currentStream);
  }

  public play() {
    if(! this.streamIsPlaying) {
      this.soundCloudService.getStream(this.currentTrack).then(stream => {
        console.log(stream);
        this.currentStream = stream;
        stream.play();
      });
    } else {
      this.currentStream.pause();
    }
    this.streamIsPlaying = !this.streamIsPlaying;
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addTrack(trackUrl) {
    this.soundCloudService.getTrack(trackUrl).then(track => this.currentTrack = track);
    this.nameListService.add(trackUrl);
  }
}
