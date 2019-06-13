import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material.module';
import { ContactManagerModule } from './contact-manager/contact-manager.module';

const appRoutes: Routes = [
  { path: 'contact',
    loadChildren: () => import('./contact-manager/contact-manager.module')
      .then(m => m.ContactManagerModule) },
  { path: '**', redirectTo: 'contact'}
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
