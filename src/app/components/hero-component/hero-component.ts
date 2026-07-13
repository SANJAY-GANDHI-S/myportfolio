import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule
  ],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  socials = [
    { icon: 'github',   href: 'https://github.com/SANJAY-GANDHI-S',    label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/sanjay-gandhi-s',  label: 'LinkedIn' },
    { icon: 'mail',     href: 'mailto:sanjaygandhi.sakadevan@gmail.com?subject=Portfolio%20Contact&body=Hi%20Sanjay%20Gandhi,%0A%0A%0ARegards,%0A[YOUR%20NAME]', label: 'Email' },
  ];
}
