import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepeComponent } from './componentes/pepe/pepe.component';
import { FulanoComponent } from './componentes/fulano/fulano.component';

@NgModule({
  declarations: [
    AppComponent,
    PepeComponent,
    FulanoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
