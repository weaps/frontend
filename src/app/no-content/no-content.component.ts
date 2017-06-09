import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <md-card style="width: 360px; margin: 100px auto;">
      <h1>
        <i class="fa fa-warning"></i>
        Coming Soon
      </h1>
    </md-card>
  `
})
export class NoContentComponent {

}
