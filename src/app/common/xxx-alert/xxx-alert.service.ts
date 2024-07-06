import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class XxxAlertService {

  constructor(private snackBar: MatSnackBar) { }

  showAlert(message: string): void {
      this.snackBar.open(message);
  }
}
