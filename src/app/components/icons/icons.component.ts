import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteService: NoteService) { }

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


  @Input() noteCard: any;
  ngOnInit(): void {
    
  }

  trash(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    this.noteService.trashNote(payload).subscribe((response : any)=>{
      console.log(response);
    })
  }

  archive(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: true
    }
    this.noteService.archiveNote(payload).subscribe((response:any) =>{
      console.log(response)
    })
  }

  setColor(color : any){
    this.noteCard.color = color
    let payload={
      color:color,
      noteIdList:[this.noteCard.id],
    }
    this.noteService.changeNoteColor(payload).subscribe((response : any)=>{
      console.log(response)
    })
  }

}
