import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: string = 'satyam';
  public demoData: string ='satyam data';
  public coreCourse = COURSES[0];
  public rxJsCourse = COURSES[1];
  public ngRxCourse = COURSES[2];

  // Event bubbling, we clicked on botton, child component and events bubbles to 
  // parent componenent,
  onCardClicked(event:Event) {
    console.log('App componenent :-- Course Viewed::', event.currentTarget);
  }

  keyDownHandler(event: Event) {
    console.log('data is::', this.data);
  }

  inputKeyDownHandler(inputValue) {
    console.log('demoData is::', inputValue);
  }
}
