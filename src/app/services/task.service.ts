import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

import { Task } from "app/models/task";
import { Status } from "app/models/status.enum";


/**
 * Angular service to handle the list of task and the list of task by status
 * 
 * @export
 * @class TaskService
 */
@Injectable()
export class TaskService {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  Status: typeof Status = Status;
  
  private _localList: any[] = [];
  private list: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public list$: Observable<any> = this.list.asObservable();

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor() { 
    let initList: Task[] = [];
    let task1 = new Task({title: "Task 1", description: "Description 1", status: Status.todo});
    let task2 = new Task({title: "Task 2", description: "Description 2", status: Status.doing});
    let task3 = new Task({title: "Task 3", description: "Description 3", status: Status.done});
    let task4 = new Task({title: "Task 4", description: "Description 4", status: Status.ongoing});
    initList.push(task1, task2, task3, task4);
    
    this.setTaskList(initList);
  }

  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------

  private setTaskList(list: any){
    this._localList = list;
    this.list.next(this._localList);
  }

  private getListByStatus(status: Status){
    let list = [];
    for(let task of this._localList){
      if(task.status === status){
        list.push(task)
      }
    }
    return list;
  }

  private removeTaskByIndex(index: string){
    this._localList.splice(Number(index), 1);  
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  public addTask(task: Task){
    this._localList.push(task);
    this.list.next(this._localList);
  }

  public removeTask(task: Task){
    for(let index in this._localList){
      if(this._localList[index].id === task.id){
        this.removeTaskByIndex(index)
      }
    }
    this.list.next(this._localList);
  }
  
  public updateTask(taskId: string, newStatus: Status){
    let taskToUpdate: Task;
    let taskIndex: string;
    for(let index in this._localList){
      if(this._localList[index].id === taskId && this._localList[index].status !== newStatus){
        taskToUpdate = this._localList[index];
        taskIndex = index;
        break;
      } 
    }

    if(taskToUpdate){
        taskToUpdate.status = newStatus;
        this.removeTaskByIndex(taskIndex);
        this.addTask(taskToUpdate);
    }
  }

  public getTodoList(){
    return this.getListByStatus(Status.todo)
  }

  public getDoingList(){
    return this.getListByStatus(Status.doing)
  }

  public getDoneList(){
    return this.getListByStatus(Status.done)
  }

  public getOngoingList(){
    return this.getListByStatus(Status.ongoing)
  }

}
