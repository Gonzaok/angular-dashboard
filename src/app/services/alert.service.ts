import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Alert } from "app/models/alert"

/**
 * Angular service to add messages to the list of alerts to show
 * 
 * @export
 * @class AlertService
 */
@Injectable()
export class AlertService {
  private alerts = new Subject<Alert>()

  public alertAdded = this.alerts.asObservable();


  /**
   * Add a new Alert model in the Observable that the alert component will subscribe a list
   * @param Alert model
   * The type of the Alert model should be: [error, success, warning, info]
   */
  public send(type: string, message: string) {
    this.alerts.next(new Alert({type, message}));
  }
}
