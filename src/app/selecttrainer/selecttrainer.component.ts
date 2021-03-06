import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-selecttrainer',
  templateUrl: './selecttrainer.component.html',
  styleUrls: ['./selecttrainer.component.css']
})
export class SelecttrainerComponent implements OnInit {

  paramId;
  trainerTechnology;
  mentorData;
  skillData;
  skill;
  showRequestedCourse;

  Time;
  StartDate;
  EndDate;
  userName;
  email;
  name;
  fees;
  prerequisites;
  yourName;
  request;
  sentData;
  CurrentUser;
  constructor(private route: ActivatedRoute, private myservice:FormService,private router:Router) {
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("userid");
    this.CurrentUser= +i;

  this.getQueryData();
  this.GetUserById();
  this.getSkill();
  }

  getQueryData() {
    this.route.queryParams.subscribe(params => {
      this.paramId = params["ID"];
      this.trainerTechnology = params["Technology"];
      console.log(this.paramId + "  " + this.trainerTechnology);
    });
  }

  GetUserById() {
    this.myservice.GetUserById(this.paramId).subscribe(data => {
      this.mentorData = data;
      console.log("mentor :"+this.mentorData.userName);
    });
  }

  getSkill() {
    this.myservice.AllSkills().subscribe(data => {
      this.skill = data;
      this.skillData = _.findWhere(this.skill, {
        name: this.trainerTechnology
      });
      console.log(this.skillData.id);
    });
  }

  onSubmit() {


    let Date_Start=moment(this.StartDate).format("DD-MM-YYYY");
    let Date_End=moment(this.EndDate).format("DD-MM-YYYY");

         const dat = {
      startDate:this.StartDate,
      endDate:this.EndDate,
      timeSlot:this.Time,
      accept:false,
      userId:this.CurrentUser,
      userName:"Sourav",
      mentorId:this.paramId,
      skillId:this.skillData.id,
      skillname:this.skillData.name,
      rejected :false,
      mentorName:this.mentorData.userName,

    };
     console.log(dat);
    this.myservice.sendTrainingDtls(dat).subscribe(data=>
      {
        this.sentData=data;
        alert(this.sentData)  
           
       });
     
  }
   // }
      
  //  }
 
}
