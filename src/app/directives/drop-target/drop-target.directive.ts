import { Directive, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[elDropTarget]'
})
export class DropTargetDirective {

  @Output('myDrop') drop = new EventEmitter();

  @Input()
    set elDropTarget(options: any) {
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    if (event.dataTransfer.types.indexOf(`string`) >= 0) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData(`string`));
    this.drop.next(data);
  }

}
