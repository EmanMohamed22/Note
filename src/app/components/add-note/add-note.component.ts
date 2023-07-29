import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwtDecode from 'jwt-decode';
import { Note } from 'src/app/core/interfaces/note';
import { NoteService } from 'src/app/core/shared/guards/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit{

constructor(private _fb:FormBuilder , private _note:NoteService,
   private _MatDialogRef:MatDialogRef<AddNoteComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any
   ){

}
mainForm!:FormGroup;
dataObject:any;
ngOnInit(): void {
  this.createForm()
  this.dataObject = jwtDecode(localStorage.getItem('token')!)
  console.log(this.dataObject);
  console.log(this.data);
  
  
}
createForm():void{
  this.mainForm = this._fb.group({
    title:[this.data? this.data.note.title : '',[Validators.required]],
    desc:[this.data? this.data.note.desc :'',[Validators.required]],
    token:[localStorage.getItem('token')],
  })
  
  console.log(this.mainForm);
  
}

sendNote():void{
  
  if (this.mainForm.valid) {
    if(this.data == null){
      this.addnote()
    }else{
      
      this.updatenote()
    }
    
  }
}


addnote():void{
  const allData = {
    ...this.mainForm.value,
     citizenID:this.dataObject._id};
  console.log(allData);
  
  this._note.addNotes(allData).subscribe({
    next:(data)=>{
      if (data.message == 'success') {
        this._MatDialogRef.close("addnote")
      }
      
      
    }
  })

}
updatenote():void{
  const model ={
    ...this.mainForm.value,
    token:localStorage.getItem('token'),
    NoteID:this.data.note._id
  }
  this._note.updateNote(model).subscribe({
    next:response=>{
      console.log(response);
      if (response.message == "updated") {
        this._MatDialogRef.close("update")
      }
      
    }
  })
}

}