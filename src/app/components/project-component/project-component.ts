import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConstantService } from '../../services/constant-service';

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

  projects: Project[] = [];

  constructor(private router: Router, private constantService: ConstantService) {}

  ngOnInit(): void {
    if ( this.router.url == "/projects" ) {
      this.isPreview = false;
      this.projects = this.constantService.projects;
    } else {
      this.projects = this.constantService.projects.slice(0, 3);
    }
  }
}
