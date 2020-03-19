import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
