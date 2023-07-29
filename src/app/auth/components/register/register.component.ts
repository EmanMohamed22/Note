import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuserService } from "../../services/auser.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private _fb:FormBuilder,
     private _router:Router , 
     private _auth:AuserService,
     private _toastr: ToastrService){
  }
  hide=true;

  ngOnInit(): void {
    this.createForm();
    
    
  }
  registerForm!:FormGroup;
  createForm():void{
    this.registerForm =this._fb.group({
      name:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
    email: ["",[Validators.required, Validators.email ]],
    password: ["",[Validators.required , Validators.minLength(6)]],
    rePassword: ["",[Validators.required]],
    phone: ["",[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
    })
  }
  
  registerData(formData:FormGroup):void{
  
    
      if (formData.valid) {
      
        
        
        this._auth.handleRegister(formData.value).subscribe({
          next:response=>{
            console.log(response);
            if(response.message == "success"){
              this._router.navigate(['/auth/home/login'])
              
    
            }
            
          },
          error:err=>{
            console.log(err);
            this._toastr.warning(err.error.errors.msg,"error")
          }
        })
      }
  

  }

}
