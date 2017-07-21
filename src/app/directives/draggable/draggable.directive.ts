import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[elDraggable]'
})
export class DraggableDirective {
  
  private options: any = {};

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set elDraggable(options: any) {
    if (options) {
      this.options = options;
    }
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.dataTransfer.setData(`string`, JSON.stringify(this.options));
  }

}
