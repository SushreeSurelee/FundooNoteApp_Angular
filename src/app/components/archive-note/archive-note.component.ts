import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {

  archivedNoteList=[]

  constructor(private noteService : NoteService){}

  ngOnInit(): void {
    this.getArchivedNotes()
  }

  getArchivedNotes(){
    this.noteService.getAllArchivedNotes().subscribe((response : any)=>{
      console.log('archived notes', response)
      this.archivedNoteList= response.data.data
      
    })
  }

  updateNoteListEvent($event:any){
    this.getArchivedNotes();
  }

}
