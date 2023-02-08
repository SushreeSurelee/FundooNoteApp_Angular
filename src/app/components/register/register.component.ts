import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private route:Router, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advanced"
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      let payload = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: this.registerForm.value.service
      }
      this.userService.registration(payload).subscribe((response: any) => {
        console.log(response);
        this.route.navigateByUrl('/login')

        this.snackbar.open('user registration sucessful', '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition:'right'
        })
      },(error : any)=>{
        console.log(error)
      })
    }

    
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
