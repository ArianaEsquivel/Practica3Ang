import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';
import { FormComponent } from './form/form.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'form', component: FormComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
