import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';

const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:'full'},
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-pass', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard],
  children:[
    {path:'notes',component: GetAllNotesComponent},
    {path:'archived-notes',component: ArchiveNoteComponent},
    {path:'trashed-notes',component: TrashNoteComponent}
  ]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
