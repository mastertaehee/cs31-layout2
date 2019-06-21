import {DataSource} from '@angular/cdk/typings/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Meeting} from './meeting/meeting.component';
import {CollectionViewer} from '@angular/cdk/collections';
import {catchError, finalize} from 'rxjs/operators';
import {MeetingsService} from './meetings.service';

export class MeetingsDataSource implements DataSource<Meeting> {
  private meetingsSubject = new BehaviorSubject<Meeting[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private meetingsService: MeetingsService) {}

  connect(collectionViewer: CollectionViewer): Observable<Meeting[]> {
    return this.meetingsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.meetingsSubject.complete();
    this.loadingSubject.complete();
  }

  loadMeetings(filter = '', sortDirection = 'asc') {

    this.loadingSubject.next(true);

    this.meetingsService.findMeetings(filter, sortDirection).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(students => this.meetingsSubject.next(students));
  }
}
