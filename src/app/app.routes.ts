import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DistrictDetailsComponent } from './pages/district-details/district-details.component';

export const routes: Routes = [
  {
    path:(''),component:LoginComponent
  },
  {
    path:('home'),component:HomeComponent
  },
  {
    path:('signup'),component:SignupComponent
  },
  {
    path:('login'),component:LoginComponent
  },
  {
    path:('districts/:name'), component: DistrictDetailsComponent
  }

];
