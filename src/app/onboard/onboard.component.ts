import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DescriptionWithArrowComponent } from '../components/description-with-arrow/description-with-arrow.component';


@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, DescriptionWithArrowComponent],
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.css'
})
export class OnboardComponent {

}
