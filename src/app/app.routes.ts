import { Routes } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TutorialComponent } from './tutorial/tutorial.component';

export const routes: Routes = [
    { path: '', component: OnboardComponent},
    { path: 'tutorial', component: TutorialComponent},
    { path: '**', component: PageNotFoundComponent },

];
