import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import { CourseCard } from './course-card/course-card';
import { Course } from './model/course';

@Component({
  selector: 'root',
  imports: [Toolbar,  CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courseData: Course = {
    id: 23,
    title: 'Angular For Beginners (signals editions) v4',
    description:  'Learn angular from scratch, build your first app, and launch your carrer as a web developer',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER v3' as Course['category'],
    seqNo: 0,
    price: 0,
  };

  onEditStarted(message: string) {
    console.log('onEditStarted called with message:', message);
  }

}
