import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  myFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.notify.emit(this.myFormGroup);
  }

}
