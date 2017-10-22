import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { SimJobService } from './SimJob.service';
import { SimJob } from './SimJob';
import { ActivatedRoute, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: 'RunID', component: AppComponent },
//   { path: 'Inventory', component: AppInventory },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  
  serverURL: string;
  projects: any[]=[];
  info: Array<any>;
  dataId: string;
  title = 'app';
  returnJson: string;
  SimJob: SimJob;
  sub: any;

  constructor(
    private inJson: SimJobService,
    // private route: ActivatedRoute
  ) {
    
    this.SimJob = new SimJob();
    
    
    this.serverURL = "https://demo6383902.mockable.io/HBLive";
    // this.sub = this.route.params.subscribe(params => {
    //   this.sub = +params['id'];   //<----- + sign converts string value to number
    //   console.log(this.sub);
    // });
  }

  ngOnInit(): void {
    // this.sub = this.route.snapshot.params['id'];
    // console.log(this.sub);
  }

  CheckStatus() {
    // console.log(this.serverURL);
    this.inJson.load( this.serverURL )
    .then( ( data ) => {
      console.log(data);
      this.SimJob = data;

      // this.returnJson = this.SimJob.StatusPercentage.toString();
    }, (error) => {
      console.log( error );
    });
  }




}
