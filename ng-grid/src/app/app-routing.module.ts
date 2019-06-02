import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GridComponent } from './views/grid/grid.component';
import { FormsComponent } from './views/forms/forms.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},{
  path: 'grid',
  component: GridComponent
},{
  path: 'forms',
  component: FormsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
