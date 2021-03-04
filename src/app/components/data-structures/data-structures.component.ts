import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/cource';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.css']
})
export class DataStructuresComponent implements OnInit {

  courses: Course[] = [];

  course:Course = new Course("","","", "");

  constructor() { }

  ngOnInit(): void {
    this.initAllCourses();
  }

  playSelected(course: Course) {
    console.log(course.toString());
    this.course = course;
  }

  private initAllCourses() {
    this.courses.push(new Course("What are Data Structures ?", "", "ds001", "https://www.youtube.com/embed/bum_19loj9A"));
    this.courses.push(new Course("Complexity Analysis", "", "ds002", ""));
    this.courses.push(new Course("Memory", "", "ds003", ""));
    this.courses.push(new Course("Big O Notation", "", "ds004", ""));
    this.courses.push(new Course("Logarithm", "", "ds005", ""));
    this.courses.push(new Course("Arrays", "", "ds006", ""));
    this.courses.push(new Course("Linked Lists", "", "ds007", ""));
    this.courses.push(new Course("Stack And Queue", "", "ds008", ""));
    this.courses.push(new Course("Hash Tables", "", "ds009", ""));
    this.courses.push(new Course("Strings", "", "ds010", ""));
    this.courses.push(new Course("Graphs", "", "ds011", ""));
    this.courses.push(new Course("Trees", "", "ds012", ""));
    this.courses.push(new Course("Tries", "", "ds013", ""));
  }

}
