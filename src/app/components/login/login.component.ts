import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
        let payload = {
          email : this.loginForm.value.email,
          password : this.loginForm.value.password
        }
        this.userService.login(payload).subscribe((response : any)=> {
          console.log("login sucessfull",response);
          localStorage.setItem('token',response.id);
          this.router.navigateByUrl('/dashboard/notes')
        })
    }
}
}
