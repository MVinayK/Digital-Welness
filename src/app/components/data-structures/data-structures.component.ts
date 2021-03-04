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
    this.courses.push(new Course("Complexity Analysis", "", "ds002", "https://www.youtube.com/embed/fZc3ijGM0aM"));
    this.courses.push(new Course("Memory", "", "ds003", "https://www.youtube.com/embed/udfbq4M2Kfc"));
    this.courses.push(new Course("Big O Notation", "", "ds004", "https://www.youtube.com/embed/v4cd1O4zkGw"));
    this.courses.push(new Course("Logarithm", "", "ds005", "https://www.youtube.com/embed/Xe9aq1WLpjU"));
    this.courses.push(new Course("Arrays", "", "ds006", "https://www.youtube.com/embed/RzoG9Io94wQ"));
    this.courses.push(new Course("Linked Lists", "", "ds007", "https://www.youtube.com/embed/njTh_OwMljA"));
    this.courses.push(new Course("Stack And Queue", "", "ds008", "https://www.youtube.com/embed/wjI1WNcIntg"));
    this.courses.push(new Course("Hash Tables", "", "ds009", "https://www.youtube.com/embed/shs0KM3wKv8"));
    this.courses.push(new Course("Graph", "", "ds009", "https://www.youtube.com/embed/AmXGNdoL_Jc")); 
    this.courses.push(new Course("Graph traversal", "", "ds011", "https://www.youtube.com/embed/zaBhtODEL0w"));
    this.courses.push(new Course("Trees", "", "ds012", "https://www.youtube.com/embed/oSWTXtMglKE"));
    this.courses.push(new Course("Tries", "", "ds013", "https://www.youtube.com/embed/zIjfhVPRZCg"));
  }

}
