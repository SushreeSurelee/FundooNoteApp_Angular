import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteCard: any;
  @Output() NoteIconEvent = new EventEmitter<any>();
  
  isArchive:boolean=false;
  isDelete:boolean=false;
  isArchived:any;
  isDeleted:any;

  constructor(private noteService: NoteService,private snackbar:MatSnackBar) { }

  colorArray = [
    { Colorcode: "#2ECC71" },
    { Colorcode: "#fff" },
    { Colorcode: "#AF7AC5" },
    { Colorcode: "#F1948A" },
    { Colorcode: "#A3E4D7" },
    { Colorcode: "#F5B7B1" },
    { Colorcode: "#F5B041" },
    { Colorcode: "#DC7633" },
    { Colorcode: "#F1C40F" },
    { Colorcode: "#AAB7B8" },
    { Colorcode: "#5A5A5A" },
    { Colorcode: "#A24857" }];

  ngOnInit(): void {
    this.isArchive=this.noteCard.isArchived;
    this.isDelete=this.noteCard.isDeleted;
  }

  trash(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    this.noteService.trashNote(payload).subscribe((response : any)=>{
      this.NoteIconEvent.emit(response)

      this.snackbar.open('Note Trashed successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }
  unTrash(){
    let payload={
      noteIdList:[this.noteCard.id],
      isDeleted:false,
    }
    this.noteService.trashNote(payload).subscribe((response :any) =>{
      this.NoteIconEvent.emit(response)
      this.snackbar.open('Note Restored successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
    
  }
  deleteForever(){
    let payload={
      noteIdList:[this.noteCard.id],
    }
    this.noteService.deleteForever(payload).subscribe((response : any)=>{
      this.NoteIconEvent.emit(response)
      this.snackbar.open('Note Deleted Permanently', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

  archive(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: true
    }
    this.noteService.archiveNote(payload).subscribe((response:any) =>{
      this.NoteIconEvent.emit(response)

      this.snackbar.open('Note Archived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

  unArchive(){
    let payload={
      noteIdList:[this.noteCard.id],
      isArchived: false,
    }
    this.noteService.archiveNote(payload).subscribe((response:any) =>{
      this.NoteIconEvent.emit(response)

      this.snackbar.open('Note Unarchived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

  setColor(color : any){
    this.noteCard.color = color
    let payload={
      color:color,
      noteIdList:[this.noteCard.id],
    }
    this.noteService.changeNoteColor(payload).subscribe((response : any)=>{
      this.NoteIconEvent.emit(response)

      this.snackbar.open('Note Color Changed successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

}
