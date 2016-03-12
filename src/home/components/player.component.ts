import {Component, Input} from 'angular2/core';

@Component({
  selector: 'player',
  styles: [`
    .button {
      height: 75px;
      width: 75px;
    }
    .play {
      content: url("https://drive.google.com/uc?export=download&id=0B94dZWnZA1-ZU1Z1SDBxSl9CQUk");
      max-height: 100%;
      max-width: 100%;
    }
    .pauze {
      content: url("https://drive.google.com/uc?export=download&id=0B94dZWnZA1-Zc0x4RTA4WUZKU3c");
      max-height: 100%;
      max-width: 100%;
    }
  `],
  template: `
    <div class="row">
      <div class="col-sm-4">
        <div class="button">
          <!--<span [class.fa-play]="! playing" [class.fa-pause]="playing">&nbsp;</span>-->
          <!--<img src="http://s24.postimg.org/3q54riz5h/play.png" class="img-responsive"/>-->
          <img [class.play]="! playing" [class.pauze]="playing"/>
        </div>
      </div>
      <div class="col-sm-8">
          <div class="panel">
            <b>{{track?.title}}</b><br/>
            {{track?.user?.username}}
            <img src="{{track?.artwork_url}}" class="img-responsive"/>
          </div>
      </div>
    </div>
  `,
})
export class PlayerComponent {
  @Input() playing : boolean;
  @Input() track : any;
}
