import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MaterialModule} from '../share/material.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '',
    component: ContactManagerComponent,
    children: [
      {path: '', component: MainContentComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ContactManagerComponent, MainContentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
