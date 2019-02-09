import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './views/shared/shared.module';

// Routes
import { APP_ROUTES } from './app.routes';

// Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './views/app/login/login.component';
import { PagesComponent } from './views/pages/pages.component';
import { Error404Component } from './views/app/errors/error404/error404.component';
import { Error401Component } from './views/app/errors/error401/error401.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    Error404Component,
    Error401Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Customs
    SharedModule,

    // Routes
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
