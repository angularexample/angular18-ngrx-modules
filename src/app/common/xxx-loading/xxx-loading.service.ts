import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class XxxLoadingService {
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  loadingOff(): void {
    this.loadingSubject.next(false);
  }

  loadingOn(): void {
    this.loadingSubject.next(true);
  }
}
