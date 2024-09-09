import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-description-with-arrow',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule ],
  template: `<div class="example-label" [ngStyle]="{'font-size': fontSize}">
    {{ labelText }} <a [routerLink]="link"> <mat-icon>arrow_circle_right</mat-icon> </a>
  </div>`,
  styles: `   .example-label {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .example-label a {
    margin-left: 1rem;
  }
`
})
export class DescriptionWithArrowComponent {
  @Input() link: string = '/home';
  @Input() fontSize: string = '19px';
  @Input() labelText: string = 'Mostrar todos';
}
