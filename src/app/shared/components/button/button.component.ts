import { Component, Input, OnInit } from '@angular/core';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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

  hasIcon: boolean = this.iconName != ''

  getIcon(_iconName: string): any {
    switch (_iconName) {
      case "edit":
        return faPencil
      case "delete":
        return faTrashCan
      default:
        break;
    }
  }

}
