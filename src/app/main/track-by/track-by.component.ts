import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Post {
  id:number,
  userId:number,
  title:string,
  body:string
}
@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {

  posts:Post[]=[];
  constructor(private http:HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:Post[])=>{
      if(res) this.posts = res;
    })
   }

  ngOnInit(): void {
  }

  deletePost(i:any | string){
    this.posts.splice(i,1);
    console.log('index :>> ', i);
  }
  updatePost(i:any){
    this.posts = this.posts
  }
}
