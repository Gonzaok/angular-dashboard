import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from "rxjs/Subject";

/**
 * Angular Service to handle the close/open action of the Modal Componente
 * 
 * @export
 * @class ModalService
 */
@Injectable()
export class ModalService {

/**
   * Observable to track the close and open actions of the modals
   * Used to be subscribed by components that want to know when a modal is open/closed
   *
   * @private
   *
   * @memberOf ModalCustomService
   */
  private actions = new Subject<any>()
  public modalActions = this.actions.asObservable();

  /**
   *  Object that have the Id of the active modals with an observable to track
   *  the open and close calls, that observable is returned when the modal is open
   *
   * @private
   *
   * @memberOf ModalCustomService
   */
  private activeModals = {}; //{modalId: Subject}

  /**
   * Creates an instance of ModalCustomService
   * and close all the open modals when the user navigate to another page
   *
   * @memberOf ModalCustomService
   */
  constructor(private router: Router) {
    this.router.events.subscribe((navigation: any) => {
      if (navigation instanceof NavigationEnd) {
        this.closeAll();
      }
    });
  }

  /**
   * Method that sends the open action with the ID of the modal to the observable actions
   * and add the ID on the object of the active modals
   *
   * return an observable of the modal open to listen the close and confirm calls on that modal
   * @param {string} modalId
   * @returns
   *
   * @memberOf ModalCustomService
   */
  public open(modalId: string) {
    this.actions.next({ id: modalId, action: 'open' });
    this.activeModals[modalId] = new Subject<any>();
    return this.activeModals[modalId].asObservable();
  }

  /**
   * Method that sends the close action to the components that are listen to it
   * and send false to the observable that was returned on the open method.
   *
   * @param {string} modalId
   *
   * @memberOf ModalCustomService
   */
  public close(modalId: string) {
    this.actions.next({ id: modalId, action: 'close'});
    this.activeModals[modalId].next(false)
  }

  /**
   * Method that sends the close action to the components that are listen to it
   * and send true to the observable that was returned on the open method.
   *
   * @param {string} modalId
   *
   * @memberOf ModalCustomService
   */
  public confirm(modalId: string) {
    this.actions.next({ id: modalId, action: 'close'});
    this.activeModals[modalId].next(true)
  }


  /**
   * Method to close all the modal that are open
   *
   * @private
   *
   * @memberOf ModalCustomService
   */
  private closeAll() {
    for (let key of Object.keys(this.activeModals)) {
      this.close(key);
    }
  }

}
