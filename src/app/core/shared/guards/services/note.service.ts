import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Environment } from 'src/app/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
baseUrl="https://sticky-note-fe.vercel.app/"
  constructor(private _http:HttpClient) { }

  addNotes(formData:object):Observable<any>{
   return this._http.post(this.baseUrl + 'addNote' ,  formData)
  }

  updateNote(formData:object):Observable<any>{
   return this._http.put(this.baseUrl + 'updateNote' ,  formData)
  }
  gstNotes(formData:object):Observable<any>{
    return this._http.post(this.baseUrl + 'getUserNotes',formData)
  }
  deleteNote(formData:object):Observable<any>{
    const Data = {
      body:formData
    }
    return this._http.delete(this.baseUrl + 'deleteNote',Data)
  }
}
