import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material.module';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactManagerModule } from './contact-manager/contact-manager.module';

const appRoutes: Routes = [
  { path: '', component: ContactManagerComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    ContactManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
