/**
 * Maniuplates and allows to display a dynamic form
 */

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { SubjectMarks } from '../../subject-marks'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentForm: FormGroup = new FormGroup({
    marks: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
    this.addSubject();
    console.log(this.marks);
  }

  get marks(): FormArray {
    return this.studentForm.get('marks') as FormArray;
  };

  addSubject() {
    this.marks.push(this.fb.group(new SubjectMarks()));
  }

  remove(i: number) {
    this.marks.removeAt(i);
  }

  submit() {
    console.log('submit');
  }

  ngOnInit() {
  }

}