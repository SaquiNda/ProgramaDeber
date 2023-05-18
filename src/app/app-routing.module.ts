import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {path:'', redirectTo:'/dashboard/products', pathMatch:'full'},
  {path:'**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
