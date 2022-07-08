import { Component, Input, OnInit } from '@angular/core';
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

  isEdit: boolean = this.iconName == 'edit'
  isDelete: boolean = this.iconName == 'delete'
  isClose: boolean = this.iconName == 'close'
  test: boolean = true

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
