import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/model/cource';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  course: Course = new Course("Welcome", "", "", "https://www.youtube.com/embed/cpP-fCo8Dn4");

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.course = new Course("Welcome", "", "", "https://www.youtube.com/embed/cpP-fCo8Dn4");
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.course.url);
  }

}
