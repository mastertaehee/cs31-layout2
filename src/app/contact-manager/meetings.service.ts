import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Meeting} from './meeting/meeting.component';

const ELEMENT_DATA: Meeting[] = [
  { meetingId: 1, meetingSubject: 'meeting1', meetingTime: '1/1/2019'},
  { meetingId: 2, meetingSubject: 'meeting2', meetingTime: '1/2/2019'},
  { meetingId: 3, meetingSubject: 'meeting3', meetingTime: '1/3/2019'},
  { meetingId: 4, meetingSubject: 'meeting4', meetingTime: '1/4/2019'},
  { meetingId: 5, meetingSubject: 'meeting5', meetingTime: '1/5/2019'},
];

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {


  constructor() {}

  findMeetings(filter = '', sortOrder = 'asc'):  Observable<Meeting[]> {

    console.log(filter, sortOrder);
    return of(ELEMENT_DATA);
    // return this.http.get('/api/students', {
    //   params: new HttpParams()
    //     .set('studentId', studentId.toString())
    //     .set('filter', filter)
    //     .set('sortOrder', sortOrder)
    // }).pipe(
    //   map(res =>  res['payload'])
    // );
  }
}
