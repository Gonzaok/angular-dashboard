import { Component, OnInit, Input } from '@angular/core';

import { Task } from 'app/models/task';

/**
 * Angular component to show the title and a short description of the Task
 * 
 * @export
 * @class CardTaskComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
