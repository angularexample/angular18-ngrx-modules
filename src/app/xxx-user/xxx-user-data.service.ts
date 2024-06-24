import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";

@Injectable({
  providedIn: 'root'
})
export class XxxUserDataService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<XxxUser[]> {
    const userUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<XxxUser[]>(userUrl);
  }
}
