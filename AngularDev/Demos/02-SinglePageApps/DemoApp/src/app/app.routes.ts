import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '',        component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about',   component: AboutComponent },
    { path: '**',      component: PagenotfoundComponent }
];

 