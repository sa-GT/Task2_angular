import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductdComponent } from './productd/productd.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { ShowproductComponent } from './Admin/showproduct/showproduct.component';
import { ShowcategoryComponent } from './Admin/showcategory/showcategory.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './SubjectAngular/parent/parent.component';
import { ChiledComponent } from './SubjectAngular/chiled/chiled.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SingupComponent,
    LoginComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductdComponent,
    AddcategoryComponent,
    AddproductComponent,
    ShowproductComponent,
    ShowcategoryComponent,
    DashboardComponent,
    ParentComponent,
    ChiledComponent,
    EditcategoryComponent,
    EditproductComponent
  ],
  // Can't bind to 'routerLink' since it isn't a known property of هاي حلها تضيف RouterModule في import  or make sure you import data correctly 
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, RouterModule, FormsModule
  ]
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
