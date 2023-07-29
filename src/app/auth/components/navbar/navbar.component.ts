import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
menuName:string = '';
constructor(private _Router:Router){
_Router.events.subscribe({
  next:response=>{
    if(response instanceof NavigationEnd){
      this.menuName= response.url.replace("/auth/home/","")
      
    }
    
  }
})
}
}
