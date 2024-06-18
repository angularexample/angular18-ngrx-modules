import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XxxAlertService {

  constructor() { }

  showAlert(message: string): void {
      // code to show alert
      alert(message);
  }
}
