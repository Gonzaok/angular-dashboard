import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from 'app/models/task';
import { Status } from "app/models/status.enum";

import { CardTaskComponent } from './card-task.component';
import { TruncatePipe } from 'app/pipes/truncate.pipe';

describe('CardTaskComponent', () => {
  let component: CardTaskComponent;
  let fixture: ComponentFixture<CardTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardTaskComponent,
        TruncatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTaskComponent);
    component = fixture.componentInstance;
    component.task = new Task({title: "Test", description: "Description Test", status: Status.doing})
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
