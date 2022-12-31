import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})

export class CreateNoteComponent implements OnInit {
  title : any
  description:any
  isShow = false;

  constructor(private noteService : NoteService) { }
  
 ngOnInit(): void {
  
 }

 ShowTakeNoteOne() {
  this.isShow = true;
}

 Close(){
  this.isShow = false;
  let payload = {
    "title": this.title,
    "description": this.description
  }
  this.noteService.addNote(payload).subscribe((response : any)=>{
    console.log("added note sucessfully",response);
  })
 }
}
