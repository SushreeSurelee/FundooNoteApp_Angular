import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})

export class UpdateNoteComponent implements OnInit {

  title: any;
  description: any;
  id:any;
  color:any;

  @Output() UpdateNoteEvent = new EventEmitter<string>();

  constructor(private note: NoteService, public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.title=this.data.title;
    this.description=this.data.description;
    this.id=this.data.id; 
  }

  closePopUp(){
    let payload={
      title:this.title,
      description:this.description,
      noteId:this.id
    }
    this.note.updateNote(payload).subscribe((response:any)=>{
      this.UpdateNoteEvent.emit(response)
      this.dialogRef.close(response);
    })
  }
  getcolornote($event : any){
    this.color = $event;
    this.UpdateNoteEvent.emit(this.color)
  }


}
