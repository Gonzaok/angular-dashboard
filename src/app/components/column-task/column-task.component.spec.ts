import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from 'app/models/task';
import { Status } from "app/models/status.enum";

import { ColumnTaskComponent } from './column-task.component';
import { CardTaskComponent } from 'app/components/card-task/card-task.component';
import { DraggableDirective } from 'app/directives/draggable/draggable.directive';
import { TruncatePipe } from 'app/pipes/truncate.pipe';

describe('ColumnTaskComponent', () => {
  let component: ColumnTaskComponent;
  let fixture: ComponentFixture<ColumnTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ColumnTaskComponent,
        CardTaskComponent,
        DraggableDirective,
        TruncatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTaskComponent);
    component = fixture.componentInstance;
    component.label = "Column"
    component.list = [new Task({title: "Test", description: "Description Test", status: Status.doing})];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
