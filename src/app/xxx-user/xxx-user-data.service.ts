import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XxxPost, XxxUser} from "./xxx-user.types";

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

  getUserPosts(userId: number): Observable<XxxPost[]> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http.get<XxxPost[]>(postUrl);
  }

  updatePost(postId: number, body: string): Observable<XxxPost> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.put<XxxPost>(postUrl, body);
  }
}
