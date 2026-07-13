import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-project',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent implements OnInit {
  isPreview: boolean = true;

  projects: Project[] = [
    {
      title: 'FitZone',
      description: 'A fitness web application built with Angular. Includes workout plans, tracking & progress.',
      image: 'assets/projects/fitzone.png',
      tags: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      link: '#',
    },
    {
      title: 'ShopVerse',
      description: 'E-commerce platform with product listing, cart, checkout & order management.',
      image: 'assets/projects/shopverse.png',
      tags: ['Angular', 'Bootstrap', 'TypeScript', 'API'],
      link: '#',
    },
    {
      title: 'TaskFlow',
      description: 'Task management dashboard to organize, track and boost team productivity.',
      image: 'assets/projects/taskflow.png',
      tags: ['Angular', 'NgRx', 'Material', 'TypeScript'],
      link: '#',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if ( this.router.url == "/projects" ) {
      this.isPreview = false;
    }
  }
}
