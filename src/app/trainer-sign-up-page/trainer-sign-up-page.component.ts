import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-trainer-sign-up-page',
  templateUrl: './trainer-sign-up-page.component.html',
  styleUrls: ['./trainer-sign-up-page.component.css']
})
export class TrainerSignUpPageComponent implements OnInit {
  MentorRegister: FormGroup;
  submitted = false;
  Data;
  SKillData;
    constructor(private fb: FormBuilder,private MentorSignService:FormService,private route:Router) { 
     
      this.MentorSignService.AllSkills().subscribe(data=>{
        this.SKillData=data;
        console.log(this.SKillData);
      });
    }

    ngOnInit() {
      this.MentorRegister=this.fb.group({
        firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
        Passwords:this.fb.group({
          Password:['',[Validators.required,Validators.minLength(8)]],
          ConfirmPassword:['',Validators.minLength(8)]
        },{validator:this.comparePasswords}),
        LinkedinURL: ['',[Validators.required,Validators.pattern('')]],  
        Experience:['',[Validators.required,Validators.pattern('^[0-9]{1,2}$')]], 
        // Timings: ['',[Validators.required]],
        Technology:['',Validators.required]
      });
    }
    
  comparePasswords( fb: FormGroup){
    let confirmPassword=fb.get('ConfirmPassword');
    if(confirmPassword.errors==null || 'passwordMismatch' in confirmPassword.errors){
      if(fb.get('Password').value != confirmPassword.value)
        confirmPassword.setErrors({passwordMismatch:true});
      else
        confirmPassword.setErrors(null);
    }
  }

  onSubmit()
  {
    if(this.MentorRegister.valid)
    {
      
      const MentorSignUp={
          userName:this.MentorRegister.value.Email,
          password:this.MentorRegister.value.Passwords.Password,
          email:this.MentorRegister.value.Email,
          firstName:this.MentorRegister.value.firstName,
          lastName:this.MentorRegister.value.lastName,
          contactNumber:this.MentorRegister.value.Phone,
          linkdinUrl:this.MentorRegister.value.LinkedinURL,
          yearOfExperience:this.MentorRegister.value.Experience,
          // TrainerTimings:this.MentorRegister.value.Timings,
          TrainerTechnology:this.MentorRegister.value.Technology,
          active:1,
          role:2,
        };
        console.log(MentorSignUp);
      
        this.MentorSignService.Register(JSON.stringify(MentorSignUp)).subscribe((data)=>{this.Data=data;
          alert(this.Data);
          if (this.Data=="Registered Successfully")
          {
               this.route.navigate(['login']);
          }
        });
    }
    else
    {
      console.log('Valid?', this.MentorRegister.valid);
    }
  
  }
}