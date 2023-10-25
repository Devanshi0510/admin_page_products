import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [

  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"sign-in",
    component: SignInComponent
  },
  {
    path:"sign-up",
    component: SignUpComponent
  },
  {
    path:"blank",
    component: BlankComponent
  },
  {
    path:"product-card",
    component: ProductDetailComponent
  },
  {
    path:"product-detail/:id",
    component: ProductDetailComponent
  },
  {
    path:"add-to-cart",
    component: AddToCartComponent
  },
  {
    path:"create/product",
    component: CreateProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
