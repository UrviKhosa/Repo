import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
@Component({
  selector: 'app-searchtraining',
  templateUrl: './searchtraining.component.html',
  styleUrls: ['./searchtraining.component.css']
})
export class SearchtrainingComponent implements OnInit {

  SKillData;
  Technology:any;
  // Timings:any;
  msg;
  show:boolean=false;
  show_nodata:boolean=false;

  constructor(private SearchTrainingService:FormService,private Route:Router) {
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.Route.navigate(['login']);
    }

   }

  ngOnInit() 
  { 
    this.SearchTrainingService.AllSkills().subscribe(data=>{
      this.SKillData=data;
      console.log(this.SKillData);
    });
  }


  //Search Trainings

  Find()
  {
    // this.Timings!=undefined
    if(this.Technology!=undefined)
    {
   console.log(this.Technology);

    this.SearchTrainingService.SearchTrainings(this.Technology).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
      if(Object.keys(this.msg).length>0)
      {
        this.show=true;
        this.show_nodata=false;
      }
      else
      {
        this.show=false;
        this.show_nodata=true;
      }
    });
  }
    else
    {
      alert("Please Select Technology and Timings");
    }
  }

//
  SendToMentor(id)
  {
  
   const data={
     ID:id,
    Technology:this.Technology
  };

   this.Route.navigate(['/selecttrainer'],{queryParams:data});
  }
}
