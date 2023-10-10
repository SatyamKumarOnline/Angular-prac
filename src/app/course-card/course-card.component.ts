import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
@Input() courseObj: any;

@Output() courseSelected = new EventEmitter<Course>();

 onCourseViewed(event:Event) {
  this.courseSelected.emit(this.courseObj);
}
}
