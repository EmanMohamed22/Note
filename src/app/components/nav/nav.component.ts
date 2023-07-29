import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  
constructor(private _router:Router){

}
ngOnInit(): void {

 
}
logout(){
  localStorage.removeItem('token')
  this._router.navigate(['/auth/home/register'])
}
}
