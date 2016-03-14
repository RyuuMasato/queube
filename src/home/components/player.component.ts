import {Component, Input} from 'angular2/core';

@Component({
  selector: 'player',
  styles: [`
.play {
  content: url("https://drive.google.com/uc?export=download&id=0B94dZWnZA1-ZODB3cGZsN1dvbmM");
  max-height: 100%;
  max-width: 100%;
}
.pauze {
  content: url("https://drive.google.com/uc?export=download&id=0B94dZWnZA1-ZbjlWV2VEV2FpQ1k");
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
