import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
 
  NoteList=[]
  isArchived=false
  isDeleted=false

  constructor(private noteService:NoteService){}

  ngOnInit():void {
    this.getAllNotes()
  }

  getAllNotes(){
    this.noteService.getAllNotes().subscribe((response:any)=>{
      this.NoteList=response.data.data
      console.log("all notes",response)
      this.NoteList = this.NoteList.filter((result:any)=>{
        return result.isArchived == false && result.isDeleted ==false;
      })
      this.NoteList = this.NoteList.reverse();
    })
  }
  ReceiveEvent($event : any){
    this.getAllNotes();
  }
}
