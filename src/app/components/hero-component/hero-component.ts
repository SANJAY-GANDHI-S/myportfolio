import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  socials = [
    { icon: 'github',   href: 'https://github.com',    label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com',  label: 'LinkedIn' },
    { icon: 'twitter',  href: 'https://twitter.com',   label: 'Twitter' },
    { icon: 'mail',     href: 'mailto:pratikkarn123@example.com', label: 'Email' },
  ];
}
