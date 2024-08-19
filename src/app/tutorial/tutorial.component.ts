import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatStepperModule, RouterLink, MatIconModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss'
})
export class TutorialComponent {

}
