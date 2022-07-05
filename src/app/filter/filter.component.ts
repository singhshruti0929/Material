import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}
  addStudent() {
    this.router.navigate(['/studentList']);
  }

  goToTeacher() {
    this.router.navigate(['/teacherList']);
  }
  //   visible = true;
  //   selectable = true;
  //   removable = true;
  //   addOnBlur = true;
  //   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  //   subjects: Subject[] = [
  //     { name: 'English' },
  //     { name: 'Maths' },
  //     { name: 'Hindi' },
  //   ];

  //   add(event: MatChipInputEvent): void {
  //     const input = event.input;
  //     const value = event.value;

  //     if ((value || '').trim()) {
  //       this.subjects.push({ name: value.trim() });
  //     }

  //     // Reset the input value
  //     if (input) {
  //       input.value = '';
  //     }
  //   }

  //   remove(subject: Subject): void {
  //     const index = this.subjects.indexOf(subject);

  //     if (index >= 0) {
  //       this.subjects.splice(index, 1);
  //     }
  //   }
  // }
}
