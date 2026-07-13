import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Home',         href: '' },
    { label: 'About',        href: 'about' },
    { label: 'Skills',       href: 'skills' },
    { label: 'Projects',     href: 'projects' },
    { label: 'Experience',   href: 'experience' },
    { label: 'Certifications', href: 'certifications' },
    // { label: 'Contact',      href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() { 
    this.scrolled = window.scrollY > 40; 
  }

  toggleMenu() { 
    this.menuOpen = !this.menuOpen; 
  }

  closeMenu()  { 
    this.menuOpen = false; 
  }
}
