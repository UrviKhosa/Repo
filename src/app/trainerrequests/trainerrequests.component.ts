import { Component, OnInit } from '@angular/core';
import * as _ from "underscore";
import {Router} from '@angular/router';
import { FormService } from '../form.service';
@Component({
  selector: 'app-trainerrequests',
  templateUrl: './trainerrequests.component.html',
  styleUrls: ['./trainerrequests.component.css']
})
export class TrainerrequestsComponent implements OnInit {

  myData;
  Requested;
  Approved;
  Declined;
  msg;
  CurrentUser;
  
 
  constructor(private myService:FormService,private route:Router) {
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }
   }

  ngOnInit() {

    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getmyData();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Requested=_.where(this.myData,{accept:false,rejected:false,mentorId:this.CurrentUser});


        this.Approved=_.where(this.myData,{accept:true,rejected:false,mentorId:this.CurrentUser});

        this.Declined=_.where(this.myData,{accept:false,rejected:true,mentorId:this.CurrentUser});

        console.log("Requested"+JSON.stringify(this.Approved));


      });

  }

  RequestApproved(id)
  {
     this.myService.ApproveTraining(id).subscribe(data=>{
       this.msg=data;
       alert(this.msg);
       this.getmyData();
     });
  }

  RequestDeclined(id)
  {
   this.myService.DeclineTraining(id).subscribe(data=>
    {
     this.msg=data;
      alert(this.msg);
      this.getmyData();
    });
  }

}
