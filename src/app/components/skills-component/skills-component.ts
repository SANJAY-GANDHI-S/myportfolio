import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule
  ],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular',     icon: 'assets/angular.svg',           color: '#dd0031' },
    { name: 'TypeScript',  icon: 'assets/typescript.svg',  color: '#3178c6' },
    { name: 'JavaScript',  icon: 'assets/javascript.svg',  color: '#f7df1e' },
    { name: 'HTML',        icon: 'assets/html5.svg',       color: '#e34f26' },
    { name: 'CSS',         icon: 'assets/css3.svg',        color: '#264de4' },
    { name: 'Java',       icon: 'assets/java.svg',       color: '#f89820' },
    { name: 'Spring Boot',       icon: 'assets/spring.svg',       color: '#6db33f' },
    { name: 'MySQL',    icon: 'assets/mysql.svg',         color: '#00758f' },
    { name: 'RxJS',        icon: 'assets/rxjs.svg',        color: '#b7178c' },
    { name: 'Bootstrap',   icon: 'assets/bootstrap.svg',   color: '#7952b3' },
    // { name: 'Git',         icon: 'assets/git.svg',         color: '#f05032' },
    // { name: 'REST API',    icon: 'assets/postman.svg',         color: '#00c853' },
    // { name: 'Agile / Scrum',    icon: 'assets/jira.svg',         color: '#0052cc' },
    // { name: 'Unit Testing',    icon: 'assets/karma.svg',         color: '#56c7de' },
  ];
}
