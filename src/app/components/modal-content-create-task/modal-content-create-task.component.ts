import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ModalService } from "app/services/modal.service";
import { TaskService } from "app/services/task.service";
import { ModalComponent } from "app/components/modal/modal.component";
import { Task } from "app/models/task";
import { Status } from "app/models/status.enum";


/**
 * Angular component to display a form to create a new Task inside the modal component
 * 
 * @export
 * @class ModalContentCreateTaskComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'modal-content-create-task',
  templateUrl: './modal-content-create-task.component.html',
  styleUrls: ['./modal-content-create-task.component.scss']
})
export class ModalContentCreateTaskComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  Status: typeof Status = Status;

  private statusOptions = [
      {label: 'To do', value: Status.todo },
      {label: 'Doing', value: Status.doing}, 
      {label: 'Done', value: Status.done}, 
      {label: 'Ongoing', value: Status.ongoing}
    ]

  private taskForm = this.fb.group({
    title: ["", Validators.required],
    description: [""],
    status: [this.statusOptions[0].value]
  });

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    private fb: FormBuilder,
    private parent: ModalComponent, 
    private modalService: ModalService,
    private taskService: TaskService) { }

  ngOnInit() {
  }

  // -------------------------------------------------------------------------
  // Private methods
  // -------------------------------------------------------------------------

  private cleanForm(){
    this.taskForm.reset();
    this.taskForm.patchValue({status: this.statusOptions[0].value});
  }

  private createTask(event) {
    this.taskService.addTask(new Task(this.taskForm.value))
    this.modalService.confirm(this.parent.modalId);
    this.cleanForm();
  }

  private cancel(e) {
    e.preventDefault();
    this.modalService.close(this.parent.modalId);
    this.cleanForm();
  }

}
