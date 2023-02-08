import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private noteService : NoteService, private snackbar : MatSnackBar) { }
  @Output() NoteCreationEvent = new EventEmitter<any>();
  
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
    this.NoteCreationEvent.emit(response)
    this.description = "";

    this.snackbar.open('Note created successfully', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition:'right'
    })
  })
 }
}
