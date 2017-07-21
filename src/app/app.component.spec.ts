import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AlertComponent } from './components/alert/alert.component';

import { AlertService } from 'app/services/alert.service';
import { AuthService } from 'app/services/auth.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent,
        AlertComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        AlertService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'header'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.header).toBeDefined()
  }));

});
