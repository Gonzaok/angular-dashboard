import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { AlertService } from 'app/services/alert.service';
import { Alert } from 'app/models/alert';

/**
 * Angular component to show global error/warning/success/info messages provided by the alert service
 * 
 * @export
 * @class AlertComponent
 */
@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('InOut', [
      state('*', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AlertComponent {
  private alerts: Alert[];

  constructor(private alertService: AlertService) {
    this.alerts = new Array<Alert>()

    //Get the alert and compare it with the last alert added to the alerts list
    alertService.alertAdded
      .distinctUntilChanged((prev: any, next: any) => JSON.stringify(this.alerts[this.alerts.length - 1]) === JSON.stringify(next))
      .subscribe(alert => {
        this.alerts.push(alert)
        setTimeout(() => { this.hide.bind(this)(alert) }, 5000)
      })
  }

  private hide(alert) {
    let index = this.alerts.indexOf(alert);
    if (index >= 0)
      this.alerts.splice(index, 1);
  }

}

