import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() receiveNotes: any
  @Output() noteDisplayEvent = new EventEmitter<string>();
  title: any
  description: any
  message:any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(noteArray: any) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '48%',
      height: 'auto',
      panelClass: "updateDialog",
      data: noteArray,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.title;
      this.description;
      console.log('The dialog was closed', result);
    })
  }

  recievedEventFromIcon($event:any){
    this.message=$event;
    this.noteDisplayEvent.emit(this.message)
  }
}
