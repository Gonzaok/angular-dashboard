import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalContentCreateTaskComponent } from './modal-content-create-task.component';
import { ModalComponent } from 'app/components/modal/modal.component';
import { ModalService } from 'app/services/modal.service';
import { TaskService } from 'app/services/task.service';
import { WindowService } from "app/services/window.service";

describe('ModalContentCreateTaskComponent', () => {
  let component: ModalContentCreateTaskComponent;
  let fixture: ComponentFixture<ModalContentCreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalContentCreateTaskComponent,
        ModalComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        ModalComponent,
        ModalService,
        TaskService,
        WindowService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
