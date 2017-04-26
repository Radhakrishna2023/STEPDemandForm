// Imports
import { Injectable, ViewContainerRef, Component }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }           from './user.interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
	// private instance variable to hold base url
     private getUrl = 'http://localhost:8080/STEPDemandService/step/stepservice/getdemanddata/6'; 
	 private postUrl = 'http://localhost:8080/STEPDemandService/step/stepservice/insertdemanddata';
	 
     // Resolve HTTP using the constructor
     constructor (private http: Http) {		  
	 } 



getUsers() : Observable<User> {
	
	 // ...using get request
	 return this.http.get(this.getUrl)
	// ...and calling .json() on the response to return data
	 .map((res:Response) => res.json())
	 //...errors if any
	 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}


addUser (data : Object) : Promise<User> {
	let bodyString = JSON.stringify(data); 
	let headers      = new Headers({ 'Content-Type': 'application/json' }); 
	let options       = new RequestOptions({ headers: headers }); 
	
	return this.http.post(this.postUrl, bodyString, options)
					 .toPromise()
					 .then(this.responseData)					 
					 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
					 
								 
}

responseData(res: Response){
	let body = res.json();
	
	if(body == 1){
		alert("Data inserted Successfully");		
	}else{
		alert("Error in inserting the data");
	}	
}


}