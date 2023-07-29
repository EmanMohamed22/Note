import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';
import { AuserService } from '../../services/auser.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private _fb:FormBuilder,
    private _router:Router ,
     private _auth:AuserService,
     private _toastr: ToastrService){

  }
  hide=true;
  ngOnInit(): void {
    this.createLogin();
    
    
  }
  loginForm!:FormGroup;
  createLogin():void{
    this.loginForm =this._fb.group({
      
      email:['',[Validators.required,Validators.email,Validators.pattern(/(com)/)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

login(formData:FormGroup):void{
console.log(formData.value);
if (formData.valid) {
  this._auth.handleLogin(formData.value).subscribe({
    next:response=>{
      console.log(response);
      if(response.message == "success"){
       
        localStorage.setItem(`token`,response.token);
        this._auth.returnToken()
        this._router.navigate(['/home']);
        
        
      }
      
    },
    error:err=>{
      console.log(err);
      this._toastr.warning(err.error.message,"error")
    }
  })
}

  }

  
  
}
