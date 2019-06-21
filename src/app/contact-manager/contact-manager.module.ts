import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MaterialModule} from '../share/material.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MeetingComponent } from './meeting/meeting.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '',
    component: ContactManagerComponent,
    children: [
      {path: '', component: MainContentComponent},
      {path: 'students', component: StudentComponent},
      {path: 'meetings', component: MeetingComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ContactManagerComponent, MainContentComponent, StudentComponent, MeetingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
