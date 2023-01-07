import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token :any

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token')
   }

  addNote(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('/notes/addNotes',requestData,true,header)
  }

  getAllNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getNotesList',true,header)
  }

  updateNote(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/updateNotes", requestData, true, header)
  }

  trashNote(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/trashNotes", requestData, true, header)
  }

  deleteForever(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/deleteForeverNotes",requestData, true, header)
  }

  getAllTrashedNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService("/notes/getTrashNotesList",true,header)
  }

  archiveNote(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/archiveNotes", requestData, true, header)
  }

  getAllArchivedNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService("/notes/getArchiveNotesList",true,header)
  }

  changeNoteColor(requestData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/changesColorNotes", requestData, true, header)
  }
}
