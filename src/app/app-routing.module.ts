import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'data-structures',
    component: DataStructuresComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
