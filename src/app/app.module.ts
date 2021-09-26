import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SecondComponent } from './second/second.component';
import { HexagonComponent } from './hexagon/hexagon.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SecondComponent,
    HexagonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
