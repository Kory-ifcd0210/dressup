import { Routes } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: OnboardComponent},
    { path: 'home', component: HomeComponent},
    { path: 'tutorial', component: TutorialComponent},
    { path: '**', component: PageNotFoundComponent },
];
