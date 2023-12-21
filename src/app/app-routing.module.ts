import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { CatsComponent } from './components/cats/cats.component';
import { DairyComponent } from './components/dairy/dairy.component';
import { ToysComponent } from './components/toys/toys.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"shop",component:ShopComponent, children:[
    {path:"dairy",component:DairyComponent},
    {path:"toys",component:ToysComponent}
  ]},
  {path:"cats",component:CatsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
