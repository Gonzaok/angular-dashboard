import { Component, OnInit, Input } from '@angular/core';

/**
 * Angular component to show the logo and title of the application on a top fix header
 * 
 * @export
 * @class AppHeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  
  @Input() logo;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
