import { Directive, HostListener, Renderer2, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open : boolean = false;
  
  @HostListener('click') onClick() {
    this.open = !this.open;
  }

}
