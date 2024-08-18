import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `<p>page-not-found</p>
<a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Back Home</a>`,
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
