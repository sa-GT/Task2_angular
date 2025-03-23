import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { SingupComponent } from './singup/singup.component';
import { ProductdComponent } from './productd/productd.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ShowcategoryComponent } from './Admin/showcategory/showcategory.component';
import { ShowproductComponent } from './Admin/showproduct/showproduct.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { ChiledComponent } from './SubjectAngular/chiled/chiled.component';
import { ParentComponent } from './SubjectAngular/parent/parent.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { DisplayVoucherComponent } from './Task6_voucher/display-voucher/display-voucher.component';
import { CreateViucherComponent } from './Task6_voucher/create-viucher/create-viucher.component';
import { EditVoucherComponent } from './Task6_voucher/edit-voucher/edit-voucher.component';

const routes: Routes = [
  { path: "loginn", component: LoginComponent },
  { path: "cat", component: CategoriesComponent },
  { path: "pro/:id", component: ProductsComponent },
  { path: "sign", component: SingupComponent },
  { path: "detailed/:id", component: ProductdComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "showcat", component: ShowcategoryComponent },
      { path: "showpro", component: ShowproductComponent },
      { path: "addcat", component: AddcategoryComponent },
      { path: "addpro", component: AddproductComponent },
      { path: "editcat/:id", component: EditcategoryComponent },
      { path: "editpro/:id", component: EditproductComponent }
    ]
  },
  { path: "secound_ch", component: ChiledComponent },
  { path: "first_pr", component: ParentComponent },
  //{ path: "display_vo", component: DisplayVoucherComponent },
  { path: "fff", component: DisplayVoucherComponent },
  { path: "fs", component: CreateViucherComponent },
  { path: "edits/:id", component: EditVoucherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
