import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";

@Injectable({
  providedIn: 'root'
})
export class XxxPostDataService {

  constructor(private http: HttpClient) {
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
