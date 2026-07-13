import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'sanjaygandhi.sakadevan@gmail.com',
      href: 'mailto:sanjaygandhi.sakadevan@gmail.com?subject=Portfolio%20Contact&body=Hi%20Sanjay%20Gandhi,%0A%0A%0ARegards,%0A[YOUR%20NAME]',
    },
    // {
    //   icon: 'phone',
    //   label: 'Phone',
    //   value: '+91 98765 43210',
    //   href: 'tel:+919876543210',
    // },
    {
      icon: 'location',
      label: 'Location',
      value: 'Karur, Tamil Nadu, India',
      href: null,
    },
  ];

  socials = [
    { icon: 'github',   href: 'https://github.com/SANJAY-GANDHI-S',   label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/sanjay-gandhi-s', label: 'LinkedIn' },
  ];

  navLinks = [
    { label: 'Home',           href: '/home' },
    { label: 'About',          href: '/about' },
    { label: 'Skills',         href: '/skills' },
    { label: 'Projects',       href: '/projects' },
    { label: 'Experience',     href: '/experience' },
    { label: 'Certifications', href: '/certifications' },
  ];

  formData = { name: '', email: '', message: '' };
  submitted = false;
  loading = false;

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.loading = true;
    // Simulate sending
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => (this.submitted = false), 4000);
    }, 1200);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
