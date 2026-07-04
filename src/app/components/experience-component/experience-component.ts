import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.css',
})
export class ExperienceComponent implements OnInit {
  
  isPreview: boolean = true;

  experiences = [
    {
      role: 'Angular Developer',
      company: 'TechNova Solutions Pvt. Ltd.',
      period: 'May 2023 – Present',
      points: [
        'Developed and maintained scalable web applications using Angular 15+.',
        'Collaborated with UI/UX designers to implement responsive designs.',
        'Integrated RESTful APIs and worked with RxJS for asynchronous data handling.',
        'Improved application performance and fixed bugs to enhance user experience.',
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if ( this.router.url == "/experience" ) {
      this.isPreview = false;
    }
  }
}
