import { Component } from '@angular/core';

import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _ajustes: SettingsService ) {}


  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;

}

