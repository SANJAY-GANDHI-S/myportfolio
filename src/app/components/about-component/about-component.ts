import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent implements OnInit{

  isPreview: boolean = true;

  stats = [
    { value: '1+',   label: 'Years Experience' },
    { value: '10+',  label: 'Projects Completed' },
    { value: '100%', label: 'Commitment' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if ( this.router.url == "/about" ) {
      this.isPreview = false;
    }
  }
}
