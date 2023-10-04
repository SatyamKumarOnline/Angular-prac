import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
@Input() courseObj;

 onCourseViewed(event:Event) {
  console.log('Card componenent Course Viewed::', event.currentTarget);
}
}
