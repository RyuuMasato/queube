import {Component, Input} from 'angular2/core';

@Component({
  selector: 'player',
  template: `
    <div class="row">
      <div class="col-sm-4">
        <button type="button" class="btn btn-primary">
          <span [class.fa-play]="! playing" [class.fa-pause]="playing" class="fa"></span>
        </button>
      </div>
      <div class="col-sm-8">
          <div class="panel">
            {{track | json}}
          </div>
      </div>
    </div>
  `,
})
export class PlayerComponent {
  @Input() playing : boolean;
  @Input() track : any;
}
