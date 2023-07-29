import { Component, OnInit } from '@angular/core';
import {MatDialog, _MatDialogBase} from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NoteService } from 'src/app/core/shared/guards/services/note.service';
import { AuserService } from 'src/app/auth/services/auser.service';
import { Note } from 'src/app/core/interfaces/note';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public _dialog: MatDialog,
    private _NoteService:NoteService,
     private _AuserService:AuserService,
     
     ) {}
  ngOnInit(): void {
    this.getNotes()
  }
  notes:Note[]=[];
  value = '';
  
  openDialog():void {
    const dialogRef = this._dialog.open(AddNoteComponent,{
      width:'800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "addnote"){
       this.getNotes()
      }
    });
  }

  getNotes():void{
    const data = {
      token:localStorage.getItem('token'),
      userID:this._AuserService.userToken.getValue()._id
    }
    
    
    this._NoteService.gstNotes(data).subscribe({
      next:response=>{
       console.log(response);
       
        if (response.message == 'success') {
          this.notes=response.Notes
          console.log(this.notes);
        }
        
      },
      error:err=>{
        alert('api has been blocked by CORS policy')
      }
    })
  }
setData(note:Note):void{
  const matdialogRef = this._dialog.open(AddNoteComponent,{
    data:{note}
  });
  matdialogRef.afterClosed().subscribe({
    next:result=>{
      console.log(result);
      
      if(result === "update"){
        this.getNotes()
      }
    }
  })
}
  deleteNote(id:string,index:number):void{
    console.log("hh",id);
    const data = {
      NoteID:id,
      token:localStorage.getItem('token')
    }
    
    
    this._NoteService.deleteNote(data).subscribe({
      next:response=>{
        if (response.message == 'deleted') {
          this.notes.splice(index,1)
          this.notes = [...this.notes]
        }
        
      }
    })
    
  }
}
