import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
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
  gridlistView: any;
  searchbar='';

  constructor(private dialog: MatDialog, private dataService : DataServiceService, private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.dataService.store.subscribe(any=>this.gridlistView=any)
    this.dataService.currentMessage.subscribe((response:any)=>{
      console.log(response)
      this.searchbar=response;
    })
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
      this.noteDisplayEvent.emit(result)
      console.log('The dialog was closed', result);

      this.snackbar.open('Note updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

  recievedEvent($event:any){
    this.message=$event;
    this.noteDisplayEvent.emit(this.message)
  }
}
