import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { GridComponent } from './views/grid/grid.component';
import { FormsComponent } from './views/forms/forms.component';
import { NavComponent } from './components/nav/nav.component';
import { GridComponent as GridBuilderComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    FormsComponent,
    NavComponent,
    GridBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
