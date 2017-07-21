import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ISubscription } from "rxjs/Subscription";

import { AuthService } from "app/services/auth.service";
import { AlertService } from "app/services/alert.service";
import RouterTransition from 'app/services/route.animation';


/**
 * Angular container component that provides a login form with username and password fields.
 * 
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [RouterTransition.slideToLeft()],
  host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  private loginSubscription: ISubscription;
  private loginForm = this.fb.group({
    name: ["", Validators.required]
  });

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {
    if(this.authService.islogged()){
      this.router.navigate(['dashboard']);
    }
   }

  ngOnInit() {}

  // -------------------------------------------------------------------------
  // Private methods
  // -------------------------------------------------------------------------

  private login(event) {
    this.loginSubscription = this.authService.login(this.loginForm.value.name).take(1).subscribe((valid) => {
      if(valid){
        this.router.navigate(['dashboard']);
      }else {
        this.alertService.send('error', 'Invalid username or password')
      }
    })
  }

  ngOnDestroy() {
    if(this.loginSubscription) this.loginSubscription.unsubscribe();
  }

}
