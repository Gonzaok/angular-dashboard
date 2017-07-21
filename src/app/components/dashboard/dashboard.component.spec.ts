import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { ColumnTaskComponent } from 'app/components/column-task/column-task.component';
import { CardTaskComponent } from 'app/components/card-task/card-task.component';
import { ModalComponent } from 'app/components/modal/modal.component';
import { ModalContentCreateTaskComponent } from 'app/components/modal-content-create-task/modal-content-create-task.component';
import { DraggableDirective } from 'app/directives/draggable/draggable.directive';
import { TruncatePipe } from 'app/pipes/truncate.pipe';
import { ModalService } from 'app/services/modal.service';
import { TaskService } from 'app/services/task.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        ColumnTaskComponent,
        CardTaskComponent,
        ModalComponent,
        ModalContentCreateTaskComponent,
        DraggableDirective,
        TruncatePipe
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        ModalService,
        TaskService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
