import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http:HttpClient) { }


usersUrl:string="https://jsonplaceholder.typicode.com/users";

postsUrl:string="https://jsonplaceholder.typicode.com/posts"


getusers_posts(){
  this.http.get(this.usersUrl).pipe(
    switchMap((users:any)=>{
      console.log("users",users);
    return this.http.get(`${this.postsUrl}?userId=${users[0].id}`);
  })).subscribe((posts:any)=>{

    console.log("posts",posts);
    
  })
}


}
