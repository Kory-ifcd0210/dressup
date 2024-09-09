import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { DescriptionWithArrowComponent } from '../components/description-with-arrow/description-with-arrow.component';
import { AvatarListComponent } from '../components/avatar-list/avatar-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MatIconModule, DescriptionWithArrowComponent, AvatarListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
