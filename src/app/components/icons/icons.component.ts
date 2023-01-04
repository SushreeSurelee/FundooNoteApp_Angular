import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  @Input() noteCard: any;
  isDeleted: boolean= false

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

}
