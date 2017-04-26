import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ITService } from './it.service';
import { IT } from './it.interface';
import { User } from './user.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css'],
  providers: [ITService]
})

@Injectable()
export class ItComponent implements OnInit {
	public it: IT
	public user: User
	
	public targetDate = [
		{ value: 'YES', display: 'YES' },
		{ value: 'NO', display: 'NO' }		
	];
	public fundsAvailable = [
		{ value: 'YES', display: 'YES' },
		{ value: 'NO', display: 'NO' }		
	];
	public headCount = [
		{ value: 'YES', display: 'YES' },
		{ value: 'NO', display: 'NO' }		
	];
	
    
  constructor(private itService: ITService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
	  
	  this.user={	
			subject: '',			
			requestOwner: '',
			requestDate: '',
			primaryBusinessContact: '',
			regionsInScope: '',
			priority: '',
			targetDueDate: '',
			uatTesters: '',
			businessObjective: '',
			expectedResult: '',
			areaofImpact: '',
			subArea: '',
			communication: '',
			valueAdd: '',
			businessRoi: '',
			risk: '',
			qualityofWork: ''
	  }
	  
	  this.it={
		  demandIntakeId: this.route.snapshot.queryParams["demandIntakeId"],
		  ticketNumber: '',
		  requestType: '',
		  estimatedEffort: '',
		  targetDate: '',
		  deadLineDate: '',
		  fundsAvailable: '',
		  headCount: '',
		  headCountType: '',
		  impactedTeams: '',
		  ticketLifeCycle: '',
		  requestDate: ''
	  }	  
	  
	  this.getUsersData(this.route.snapshot.queryParams["demandIntakeId"]);
  }
  
  getUsersData(data: Object) {
        // Get all data
         this.itService.getUsersData(data)
                           .subscribe(
                               user => this.user = user, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
								
  }
  
  submitForm(data: Object){
		
		this.itService.addITData(data);						
		
  }
  reset(form: Object){
		
		this.it={	
		  demandIntakeId: this.route.snapshot.queryParams["demandIntakeId"],
		  ticketNumber: '',
		  requestType: '',
		  estimatedEffort: '',
		  targetDate: '',
		  deadLineDate: '',
		  fundsAvailable: '',
		  headCount: '',
		  headCountType: '',
		  impactedTeams: '',
		  ticketLifeCycle: '',
		  requestDate: ''
		}		
	}

}
