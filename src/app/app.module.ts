import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AuthguardServiceService } from './services/authguard-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './pipe/filter.pipe';
import { ErrorInterceptService } from './services/errorIntercept/error-intercept.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    DashboardComponent,
    UpdateNoteComponent,
    ArchiveNoteComponent,
    TrashNoteComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [
    AuthguardServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
