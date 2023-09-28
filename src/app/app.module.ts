import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormatNamePipe } from './format-name.pipe';
import { FormatLastnamePipe } from './format-lastname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    FormatNamePipe,
    FormatLastnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
