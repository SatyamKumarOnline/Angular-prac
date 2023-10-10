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
  onCardClicked(course:Course) {
    console.log('App componenent :--', course);
  }

  keyDownHandler(event: Event) {
    console.log('data is::', this.data);
  }

  inputKeyDownHandler(inputValue: any) {
    console.log('demoData is::', inputValue);
  }
}
