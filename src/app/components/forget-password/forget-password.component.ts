import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.forgotpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgotpasswordForm.valid) {
       let payload = {
        email: this.forgotpasswordForm.value.email,
       }
       this.userService.forgetPassword(payload).subscribe((response:any)=>{
        console.log('reset email sent to',response);
       })
    }
}

onReset() {
  this.submitted = false;
  this.forgotpasswordForm.reset();
}

}
