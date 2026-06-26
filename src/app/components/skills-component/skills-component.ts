import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular',     icon: 'assets/icons/angular.svg',     color: '#dd0031' },
    { name: 'TypeScript',  icon: 'assets/icons/typescript.svg',  color: '#3178c6' },
    { name: 'JavaScript',  icon: 'assets/icons/javascript.svg',  color: '#f7df1e' },
    { name: 'HTML',        icon: 'assets/icons/html5.svg',       color: '#e34f26' },
    { name: 'CSS',         icon: 'assets/icons/css3.svg',        color: '#264de4' },
    { name: 'RxJS',        icon: 'assets/icons/rxjs.svg',        color: '#b7178c' },
    { name: 'Bootstrap',   icon: 'assets/icons/bootstrap.svg',   color: '#7952b3' },
    { name: 'Git',         icon: 'assets/icons/git.svg',         color: '#f05032' },
    { name: 'REST API',    icon: 'assets/icons/api.svg',         color: '#00c853' },
    { name: 'Figma',       icon: 'assets/icons/figma.svg',       color: '#f24e1e' },
  ];
}
