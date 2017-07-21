import { trigger, state, animate, style, transition } from '@angular/core';

var headerHeight = "110px";

const RouterTransition = {

  slideToLeft() {
    return trigger('routerTransition', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateX(100%)', position: 'relative', width: '100%', height: '100%' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)', position: 'fixed', top: headerHeight, width: '100%', height: 'calc(100% - ' + headerHeight + ')' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]);
  },

}

export default RouterTransition;
