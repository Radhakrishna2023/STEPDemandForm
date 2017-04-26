// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Demand }           from './demand.interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DemandService {
	// private instance variable to hold base url
     private getDemandsUrl = 'http://localhost:8080/STEPDemandService/step/stepservice/getdemands'; 
	 
	 
     // Resolve HTTP using the constructor
     constructor (private http: Http) {} 



public getDemands() : Observable<Demand> {
	
	 // ...using get request
	 return this.http.get(this.getDemandsUrl)
	// ...and calling .json() on the response to return data
	 .map((res:Response) => res.json())
	 //...errors if any
	 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

}