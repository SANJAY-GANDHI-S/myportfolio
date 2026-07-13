import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConstantService } from '../../services/constant-service';

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

  experiences: any[] = [];

  constructor(private router: Router, private constantService: ConstantService) {}

  ngOnInit(): void {
    if ( this.router.url == "/experience" ) {
      this.isPreview = false;
      this.experiences = this.constantService.experiences;
    } else {
      this.isPreview = true;
      this.experiences = this.constantService.experiences.slice(0, 1);
    }
  }
}
