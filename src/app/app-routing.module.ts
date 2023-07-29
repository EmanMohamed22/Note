import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { canActivate } from './core/shared/guards/guard.guard';
import { HomeComponent } from './components/home/home.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'',redirectTo:"auth",pathMatch:"full"},
  {path:'auth',loadChildren:()=> import ("./auth/auth.module").then((m)=> m.AuthModule)},
  {path:'',canActivate:[canActivate],component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'add-note',component:AddNoteComponent,title:'AddNote'},
    {path:'nav',component:NavComponent,title:'Nav'},
 
  ]},
  {path:'**',component:NotfoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
