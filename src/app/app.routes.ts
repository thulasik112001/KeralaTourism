import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { IndDistrictsComponent } from './ind-districts/ind-districts.component';

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
    path:('indDistricts'),component:IndDistrictsComponent
  },
];
