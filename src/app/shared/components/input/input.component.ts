import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  value: string = '';

  @Input()
  required: boolean = false;

  @Input()
  inputLabel?: string;

  @Input()
  inputPlaceholder?: string;

  @Input()
  type?: string;

  @Input()
  errorText?: string;

  @Input()
  showRequired?: boolean;

  @Input()
  name?: string;

  @Input()
  formGroupName: string = '';


  @Output() change: any = new EventEmitter();

  emitEvent(event: Event) {
    this.change.emit((event.target as HTMLInputElement));
  }
}
