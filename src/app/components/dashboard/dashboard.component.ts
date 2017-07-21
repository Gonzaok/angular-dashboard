import { Component, OnInit } from '@angular/core';

import { Status } from "app/models/status.enum";
import { TaskService } from 'app/services/task.service'
import { ModalService } from "app/services/modal.service";

/**
 * Angular container component to show the task in columns with the respective status
 * and provide a modal to create new Tasks
 * 
 * @export
 * @class DashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  Status: typeof Status = Status;

  private taskList = [];
  private todoList = [];
  private doingList = [];
  private doneList = [];
  private ongoingList = [];
  private modalCreateTask = "modalCreateTask";

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    private modalService: ModalService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.list$.subscribe((value) => {
      this.taskList = value;
      this.todoList = this.taskService.getTodoList();
      this.doingList = this.taskService.getDoingList();
      this.doneList = this.taskService.getDoneList();
      this.ongoingList  = this.taskService.getOngoingList()
    })

  }

  // -------------------------------------------------------------------------
  // Private methods
  // -------------------------------------------------------------------------

  private openModal(){
     this.modalService.open(this.modalCreateTask).subscribe(response => {
        if (response) {
          console.log('confirm');
        } else {
          console.log('cancel');
        }
      });
  }

  private onDrop(data: any, status: string) {
    this.taskService.updateTask(data.id, Status[status])
  }

}
