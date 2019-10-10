import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
@Component({
  selector: 'app-currenttrainingtrainer',
  templateUrl: './currenttrainingtrainer.component.html',
  styleUrls: ['./currenttrainingtrainer.component.css']
})
export class CurrenttrainingtrainerComponent implements OnInit {

  myTrainings;
  Data;
  Progress;
  msg;
  getId;
  CurrentUser;
  constructor(private myService:FormService,private router:Router) {
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    } 
  }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,mentorId:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
     console.log(Object.keys(this.myTrainings).length);
     if(Object.keys(this.myTrainings).length>0)
     {
       this.Data=false;
     }
     else
     {
       this.Data=true;
     }
    });
  }

  Update(id)
  { 
    this.getId=id;
  }

  Mainupdate()
  {
    let data={
      id:this.getId,
      progress:this.Progress
    };

  this.myService.trainingProgress(data).subscribe(data=>{
    this.msg=data;
    alert(this.msg);
    this.Progress='';
    this.getTrainings();
  });
  }
}
