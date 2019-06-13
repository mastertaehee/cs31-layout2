import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MaterialModule} from '../share/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactManagerComponent, MainContentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class ContactManagerModule { }
