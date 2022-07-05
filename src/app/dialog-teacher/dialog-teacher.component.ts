import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog-teacher',
  templateUrl: './dialog-teacher.component.html',
  styleUrls: ['./dialog-teacher.component.scss'],
})
export class DialogTeacherComponent implements OnInit {
  genderList = ['Male', 'Female', 'Trans'];
  teacherForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogTeacherComponent>
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      Name: ['', Validators.required],
      DOB: ['', Validators.required],
      Gender: ['', Validators.required],
      Subject: ['', Validators.required],
    });
  }
  addTeacher() {
    if (this.teacherForm.valid) {
      this.api.postTeacher(this.teacherForm.value)
        .subscribe({
          next: (res) => {
            alert("Teacher added successfully")
          },
          error: () => {
            alert("Error while adding the product")
          }
      })
    }
      
  }
}
