import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../form.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-sign-up-page',
  templateUrl: './user-sign-up-page.component.html',
  styleUrls: ['./user-sign-up-page.component.css']
})

export class UserSignUpPageComponent implements OnInit {

  myForm:FormGroup;
  status:boolean=false;
  Data;

  constructor(private fb:FormBuilder,private AddService:FormService,private route:Router) {
    this.myForm=fb.group({
      // Username: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Email:['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password:['', [Validators.required]],
      CPassword:['', [Validators.required]],
      Fname:['', [Validators.required]],
      Lname:['', [Validators.required]],
      Mobile:['', [Validators.required,Validators.minLength(12)]],
   });
   
   }

  ngOnInit() {
  }

  UserSignup(Form:FormGroup)
  {
    if(Form.valid)
    {
      if(Form.value.Password==Form.value.CPassword)
      {
        const SignUp={
            // userName:Form.value.Username,
            password:Form.value.Password,
            email:Form.value.Email,
            firstName:Form.value.Fname,
            lastName:Form.value.Lname,
            contactNumber:Form.value.Mobile,
            confirmedSignUp:true,
            active:true,
            role: 3
        };
        console.log(SignUp);
        this.status=false;
        this.AddService.Register(JSON.stringify(SignUp)).subscribe((data)=>{this.Data=data;
          alert(this.Data);
          if (this.Data=="Registered Successfully")
            {
                 this.route.navigate(['login']);
            }
        });
      

      }
    }
    else
    {
      this.status=true;
      console.log('Valid?', Form.valid);
    }
  }
}
