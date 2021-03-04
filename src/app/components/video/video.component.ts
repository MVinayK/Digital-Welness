import { Component, ElementRef, Input, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/model/cource';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  course: Course = new Course("", "", "", "");

  //@ViewChild('iframe') 
  //iframe: ElementRef;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.course.toString);
  }

  getUrl() {
    this.sanitizer.bypassSecurityTrustResourceUrl(this.course.url);
  }

}
