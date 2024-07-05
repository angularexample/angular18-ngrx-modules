import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class XxxLoadingService {
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  loadingOn() {
    console.log('~XxxLoadingService.loadingOn()')
    this.loadingSubject.next(true);
  }

  loadingOff() {
    console.log('~XxxLoadingService.loadingOff()')
    this.loadingSubject.next(false);
  }
}
