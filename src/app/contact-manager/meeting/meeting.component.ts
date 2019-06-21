import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MeetingsService} from '../meetings.service';
import {MeetingsDataSource} from '../meetings-data-source';
import {MatSort} from '@angular/material';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

export interface Meeting {
  meetingId: number;
  meetingTime: string;
  meetingSubject: string;
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['meetingId', 'meetingTime', 'meetingSubject'];
  dataSource: MeetingsDataSource;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('filter', {static: false}) filter: ElementRef;

  constructor(private meetingsService: MeetingsService) {
  }

  ngOnInit() {
    this.dataSource = new MeetingsDataSource(this.meetingsService);
    this.dataSource.loadMeetings();
  }

  ngAfterViewInit(): void {
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.loadMeetingsPage();
        })
      )
      .subscribe();

    this.sort.sortChange.subscribe(() => this.loadMeetingsPage());
  }

  loadMeetingsPage() {
    this.dataSource.loadMeetings(this.filter.nativeElement.value, this.sort.direction);
  }

}
