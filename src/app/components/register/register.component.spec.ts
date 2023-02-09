import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,MatSnackBarModule,RouterTestingModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,
        MatCheckboxModule
    ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check values for registerform group', ()=>{
    const registerFormGroup=component.registerForm;
    const registerFormValues={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
      service:'advanced'
    }
    expect(registerFormGroup.value).toEqual(registerFormValues);
  })
});
