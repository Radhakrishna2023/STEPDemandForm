import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from './user.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-root',
  template: `
    <h1>STEP Demand Router</h1>
    <nav>
      <a routerLink="/demand" routerLinkActive="active">Demand Intake Form</a>
	  <a routerLink="/demandlisting" routerLinkActive="active">Demand Listing</a>
      <a routerLink="/it" routerLinkActive="active">IT Form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
	

constructor() {} 
  
ngOnInit() {                     
		
    }

    	
		
}
