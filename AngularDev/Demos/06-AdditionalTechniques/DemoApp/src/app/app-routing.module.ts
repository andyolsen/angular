import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductListViaRestComponent } from './product-list-via-rest/product-list-via-rest.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-list-via-rest', component: ProductListViaRestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
