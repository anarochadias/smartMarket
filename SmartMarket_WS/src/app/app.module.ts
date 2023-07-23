import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteBaseModule } from './site-base/site-base.module';
//import { CreateLocalizacaoComponent } from './create-localizacao/create-localizacao.component';
//import { ViewLocalizacaoComponent } from './view-localizacao/view-localizacao.component';
//import { ViewAllLocalizacoesComponent } from './view-all-localizacoes/view-all-localizacoes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteBaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
