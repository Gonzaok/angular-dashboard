import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app.route'

// Components
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentCreateTaskComponent } from './components/modal-content-create-task/modal-content-create-task.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ColumnTaskComponent } from './components/column-task/column-task.component';

// Directives
import { DraggableDirective } from 'app/directives/draggable/draggable.directive';
import { DropTargetDirective } from 'app/directives/drop-target/drop-target.directive';

//Pipes
import { TruncatePipe } from 'app/pipes/truncate.pipe';

// Services
import { AuthGuard } from 'app/services/auth.guard';
import { AlertService } from 'app/services/alert.service';
import { ModalService } from 'app/services/modal.service';
import { TaskService } from 'app/services/task.service';
import { AuthService } from 'app/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DraggableDirective,
    DropTargetDirective,
    CardTaskComponent,
    ModalComponent,
    ModalContentCreateTaskComponent,
    AppHeaderComponent,
    ColumnTaskComponent,
    AlertComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    ModalService,
    TaskService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
