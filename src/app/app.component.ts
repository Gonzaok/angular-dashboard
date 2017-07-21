import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "app/services/auth.service";

// Polyfill for angular 2 animations
import 'web-animations-js/web-animations.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private header = {
    logo: "/assets/images/logo.png",
    title: "Tarmac Dashboard"
  }

  constructor(
    private authService: AuthService, 
    private router: Router){
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
