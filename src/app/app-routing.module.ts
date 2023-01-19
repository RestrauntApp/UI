import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path:"", component:RestaurantComponent},

  {path:"/login",component:LogInComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
