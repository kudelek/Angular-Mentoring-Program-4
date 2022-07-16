import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBug, faPencil, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  buttonText: string = ''

  @Input()
  iconName: string =''

  @Input()
  type: string = 'button'

  @Output() click: any = new EventEmitter();

  onClick(e?: MouseEvent) {
    this.click.emit(e);
  }

  faPencil = faPencil
  faTrashcan = faTrashCan
  faX = faX

  getIcon(iconName: string) {
    switch (iconName) {
      case 'edit':
        return faPencil;
      case 'delete':
        return faTrashCan;
      case 'close':
        return faX;
      default:
        return faBug;
    }
  }

}
