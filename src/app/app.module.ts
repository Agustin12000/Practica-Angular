import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriaAbmModule } from './materia-abm/materia-abm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MateriaAbmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
