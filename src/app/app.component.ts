import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
title = 'hadiya_products_admin';
constructor(private http: HttpClient) {}
ngOnInit() {
this.http.get('http://hadiya-backend-alb-1512806879.us-east-1.elb.amazonaws.com:3000').subscribe((data: any) => {
console.log(data);
});
}
}
