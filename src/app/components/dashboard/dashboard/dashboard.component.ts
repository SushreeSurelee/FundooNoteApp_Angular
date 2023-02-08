import { ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  grid = false;
  formatGridList = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private dataService : DataServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  archiveNotes(){
    this.router.navigateByUrl('/dashboard/archived-notes')
  }

  trashedNotes(){
    this.router.navigateByUrl('/dashboard/trashed-notes')
  }

  Logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
  }

  searchNote(event:any){
    this.dataService.sendMessage(event.target.value)
  }

  FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }

  formatListView(){
    this.grid = true;
    this.dataService.nextDataUpdate(this.FormatView().valueOf())
    console.log("value= ", this.FormatView().valueOf())
  }
  formatGridView() {
    this.grid = false
    this.dataService.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }
}
