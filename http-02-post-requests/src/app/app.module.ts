import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthIntercaptorService } from './auth.intercaptor.service';
import { LoggingIntercaptor } from './logging-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthIntercaptorService,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingIntercaptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
