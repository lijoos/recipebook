import { Directive,HostListener,HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropdownActive{
@HostBinding('class.open') dropDownActiveClass=false;
@HostListener('click') onclick() {
  this.dropDownActiveClass=! this.dropDownActiveClass;
}
@HostListener('mouseleave') onMouseLeave() {
  this.dropDownActiveClass=false;
}
}