import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponentComponent } from './game-control-component/game-control-component.component';
import { OddComponentComponent } from './game-control-component/odd-component/odd-component.component';
import { EvenComponentComponent } from './game-control-component/even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponentComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
