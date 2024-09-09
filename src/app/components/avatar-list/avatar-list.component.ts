import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-avatar-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="avatar-list">
      <div class="avatar" *ngFor="let image of images">
         <img [src]="image.url" [alt]="'Avatar ' + image.id" [attr.data-id]="image.id"/>
      </div>
    </div>
  `,
  styleUrl: './avatar-list.component.css'
})
export class AvatarListComponent {
  images = [
    { id: 1, url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { id: 2, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: 3, url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { id: 4, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: 5, url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },

  ];
}
