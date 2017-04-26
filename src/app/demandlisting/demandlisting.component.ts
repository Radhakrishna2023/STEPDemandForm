import { Component, OnInit } from '@angular/core';
import { DemandService } from './demand.service';
import { Demand } from './demand.interface';

@Component({
  selector: 'app-demandlisting',
  templateUrl: './demandlisting.component.html',
  styleUrls: ['./demandlisting.component.css'],
  providers: [DemandService]
})
export class DemandlistingComponent implements OnInit {
	public demands: Demand

  constructor(private demandService: DemandService) { }

  ngOnInit() {
	  
	   
	  this.getDemands();
  }
  
  getDemands() {
        // Get all data
         this.demandService.getDemands()
                           .subscribe(
                               demands => this.demands = demands, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
								
  }

}
