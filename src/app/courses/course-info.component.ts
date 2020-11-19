import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
    templateUrl:"./course-info.component.html"
})

export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor (private activatedRoute: ActivatedRoute, private coursesService: CourseService) { }

  ngOnInit(): void {
    this.coursesService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void{
    this.coursesService.save(this.course).subscribe({
       next: course => console.log('Saved with success', course),
       error: err => console.log('Error', err)
    });
  }

}
