import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { SignupComponent } from './signup/signup.component';
import { SurveyComponent } from './survey/survey.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path: "survey", component:SurveyComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "create", component:CreateComponent},
  {path: "analysis", component:AnalysisComponent},
  {path: "home", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
