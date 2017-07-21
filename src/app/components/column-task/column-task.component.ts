import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from "app/models/task";

/**
 * Angular component to show a list of tasks and enable to drag them and set a custom event on drop
 * 
 * @export
 * @class ColumnTaskComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'column-task',
  templateUrl: './column-task.component.html',
  styleUrls: ['./column-task.component.scss']
})
export class ColumnTaskComponent implements OnInit {

  @Input() label: string;
  @Input() list: Task[];
  @Output() columnDrop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDrop(data: any) {
    this.columnDrop.emit(data)
  }

}
