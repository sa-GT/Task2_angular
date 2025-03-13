import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { SingupComponent } from './singup/singup.component';
import { ProductdComponent } from './productd/productd.component';

const routes: Routes = [
  { path: "loginn", component: LoginComponent },
  { path: "cat", component: CategoriesComponent },
  { path: "pro/:id", component: ProductsComponent },
  { path: "sign", component: SingupComponent },
  { path: "detailed/:id", component: ProductdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
