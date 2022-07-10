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

  input: any = {name: '', value: ''};

  @Input()
  isRequired?: boolean = false;

  @Input()
  inputLabel?: string;

  @Input()
  inputPlaceholder?: string;

  @Input()
  inputType?: string;

  @Input()
  requiredText?: string;

  @Input()
  isValid?: boolean;


  @Output() change: any = new EventEmitter();

  getValue(event: Event): string {
    this.change.emit(event.target as HTMLInputElement);
    return (event.target as HTMLInputElement).value;
  }
}
