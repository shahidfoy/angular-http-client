import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  login: string,
  bio: string,
  company: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-http-client';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.github.com/users/shahidfoy').subscribe(
      data => {
        console.log("User Login: " + data.login);
        console.log("User Bio: " + data.bio);
        console.log("User Company: " + data.company);
      },
    (err: HttpErrorResponse) => {
      if(err.error instanceof Error) {
        console.log("Client-side Error occured");
      } else {
        console.log("Server-side Error occured");
      }     
    })

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    )

    const put = this.http.put('http://jsonplaceholder.typicode.com/posts/3', {
      userId: 1,
      id: 3,
      title: "angular rest",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestia"
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    )

  }



}
