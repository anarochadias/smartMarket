import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteBaseModule } from './site-base/site-base.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
