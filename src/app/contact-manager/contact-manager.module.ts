import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from '../share/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactManagerComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class ContactManagerModule { }
