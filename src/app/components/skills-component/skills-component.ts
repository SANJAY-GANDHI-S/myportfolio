import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConstantService } from '../../services/constant-service';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.css',
})
export class SkillsComponent implements OnInit{

  isSkillPage: boolean = true;

  skills: any[] = [];

  constructor(private router: Router, private constantService: ConstantService){}

  ngOnInit(): void {
    if (this.router.url == '/skills') {
      this.isSkillPage = false;
      this.skills = this.constantService.skills;
    } else {
      this.isSkillPage = true;
      this.skills = this.constantService.skills.slice(0, 10);
    }
  }
}
