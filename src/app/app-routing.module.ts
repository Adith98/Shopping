import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"products-list",component:ProductListComponent},
  {path:"Login",component:LoginComponent},
  {path:"Your-Cart",component:CartComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
