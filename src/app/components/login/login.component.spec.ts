import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,MatSnackBarModule,RouterTestingModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Fundoo in h1 tag',(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h1').textContent).toEqual('Fundoo');
  }));

  it('should render Use your Fundoo Account in h3 tag',(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h3').textContent).toEqual('Use your Fundoo Account');
  }));

  it('should have forget password button in button tag',(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('button').textContent).toEqual('Forgot Password?');
  }));

  it('should check values for loginform group', ()=>{
    const loginFormGroup=component.loginForm;
    const loginFormValues={
      email:'',
      password:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })

});
