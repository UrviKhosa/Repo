import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }
    AdminLogin: FormGroup;
    submitted=false;

  ngOnInit() {

    this.AdminLogin= this.fb.group({
      Name: ['', [Validators.required]],
      Password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }


  log()
  {

    this.router.navigate(['/adminmenu']);
  }
}

