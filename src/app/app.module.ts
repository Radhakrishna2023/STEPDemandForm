import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItComponent } from './it/it.component';
import { DemandComponent } from './demand/demand.component';
import { DemandlistingComponent } from './demandlisting/demandlisting.component';
import { ToastrModule } from 'toastr-ng2';

const appRoutes: Routes = [
  { path: 'demand', component: DemandComponent },
  { path: 'it', component: ItComponent },
  { path: 'demandlisting', component: DemandlistingComponent }   
];

@NgModule({
  declarations: [
    AppComponent,
    ItComponent,
    DemandComponent,
    DemandlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
	ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
