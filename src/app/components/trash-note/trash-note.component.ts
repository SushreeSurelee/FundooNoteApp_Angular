import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit{

  TrashNotesList = []

  constructor(private noteService : NoteService){}

  ngOnInit(): void {
    this.gettrashedNotes()
  }

  gettrashedNotes(){
    this.noteService.getAllTrashedNotes().subscribe((response : any) =>{
      console.log('trashed notes', response)
      this.TrashNotesList = response.data.data
    })
  }

}
