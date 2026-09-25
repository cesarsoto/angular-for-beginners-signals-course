import { Component } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { Tabs } from '../tabs/tabs';

@Component({
  selector: 'courses',
  imports: [CourseCard, CoursesCardList, Tabs],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

}
