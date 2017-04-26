import { Component, OnInit, Injectable, Input } from '@angular/core';
import { User } from './user.interface';
import { UserService } from './user.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css'],
  providers: [UserService]
})

@Injectable()
export class DemandComponent implements OnInit {

  public user: User

@Input()
regionsInScope = [
    { value: 'AMER', display: 'AMER' },
    { value: 'EMEA', display: 'EMEA' },
    { value: 'APAC', display: 'APAC' },
    { value: 'JAPAN', display: 'JAPAN' }
];

@Input()
priority = [
    { value: 'P0', display: 'P0' },
    { value: 'P1', display: 'P1' },
    { value: 'P2', display: 'P2' }
];

@Input()
uatTesters = [
    { value: 'AMER', display: 'AMER' },
    { value: 'EMEA', display: 'EMEA' },
    { value: 'APAC', display: 'APAC' },
    { value: 'JAPAN', display: 'JAPAN' }
];

@Input()
subArea = [
    { value: 'Compliance', display: 'Compliance' },
    { value: 'SOX', display: 'SOX' },
    { value: 'Legal', display: 'Legal' }
];

// Input properties
@Input() subject: string;
@Input() requestOwner: string;
@Input() requestDate: string;
@Input() primaryBusinessContact: string;
@Input() targetDueDate: string;
@Input() businessObjective: string;
@Input() expectedResult: string;
@Input() areaofImpact: string;
@Input() communication: string;
@Input() valueAdd: string;
@Input() businessRoi: string;
@Input() risk: string;
@Input() qualityofWork: string;

  constructor(private userService: UserService, private toastrService: ToastrService) { }

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
			
    }

    getUsers() {
        // Get all data
         this.userService.getUsers()
                           .subscribe(
                               user => this.user = user, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
								
    }
	
	submitForm(data: Object){
		
		this.userService.addUser(data);
	}		
	
	reset(form: Object){
		
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
	}

}
