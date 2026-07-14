import { Injectable } from '@angular/core';
import { Project } from '../components/project-component/project-component';
import { Certification } from '../components/certifications-component/certifications-component';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
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
    { name: 'Git',         icon: 'assets/git.svg',         color: '#f05032' },
    { name: 'ReactJS',    icon: 'assets/react.svg',         color: '#00d8ff' },
    { name: 'REST API',    icon: 'assets/postman.svg',         color: '#00c853' },
    { name: 'Agile / Scrum',    icon: 'assets/jira.svg',         color: '#0052cc' },
    { name: 'Unit Testing',    icon: 'assets/karma.svg',         color: '#56c7de' },
  ];

  projects: Project[] = [
    {
      title: 'My Portfolio',
      description: 'Developed a responsive portfolio website showcasing skills, projects, experience, and contact information professionally.',
      image: '',
      tags: ['Angular', 'TypeScript', 'HTML CSS'],
      link: 'https://github.com/SANJAY-GANDHI-S/myportfolio.git',
    },
    {
      title: 'Employee Management System',
      description: 'Developed a role-based Employee Management System with Admin/User access, CRUD operations, and dashboards.',
      image: '',
      tags: ['Angular', 'TypeScript', 'PrimeNG', 'JSON','HTML CSS'],
      link: '',
    },
    {
      title: 'Graphical Based Cloud Transaction System',
      description: 'Developed a secure cloud file storage system using PHP, MySQL, and graphical password authentication.',
      image: '',
      tags: ['PHP', 'MySQL'],
      link: '',
    },
    {
      title: 'Calculator',
      description: 'Developed a responsive Angular calculator with basic arithmetic operations and intuitive user interface.',
      image: 'assets/calculator.jpeg',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/SANJAY-GANDHI-S/calculator.git',
    },
  ];

  experiences = [
    {
      role: 'Associate Software Analyst',
      company: 'ITOrizon India Pvt Ltd',
      period: 'Nov 2024 - Feb 2026',
      points: [
        'Developed schema-driven UI supporting multiple dynamic views.',
        'Built configurable CRUD operations and workflow actions.',
        'Created reusable Block View with drag-and-drop functionality.',
        'Developed reusable navigation guard tracking unsaved changes across application forms.',
        'Implemented schema-based validation for dynamic forms.',
        'Enhanced responsive layouts with dynamic action overflow.',
        'Improved enterprise usability through configurable interface components.',
        'Wrote Jasmine and Karma unit tests, improving code stability and reducing production defects.'
      ]
    },
  ];

  certifications: Certification[] = [
      {
        title: 'Angular – Introduction to Front End Development',
        issuer: 'simplilearn',
        year: '2026',
        credentialUrl: 'https://simpli-web.app.link/e/3jy354ydrVb',
        logo: 'assets/angular.svg',
        logoColor: '#dd0031',
        badge: 'Angular',
        certificationUrl: 'assets/IntroductionToFrontEndDevelopment.jpg',
      },
      {
        title: 'Full Stack with Java',
        issuer: 'Besant Technology',
        year: '2024',
        credentialUrl: 'https://www.besanttechnologies.com/',
        logo: 'assets/java.svg',
        logoColor: '#f89820',
        badge: 'Java',
        certificationUrl: 'assets/besant.jpeg',
      },
    ];
}
