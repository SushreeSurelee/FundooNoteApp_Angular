import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ForgetPasswordComponent } from './forget-password.component';

fdescribe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check values for forgetpasswordform group', ()=>{
    const forgotpasswordFormGroup=component.forgotpasswordForm;
    const forgotpasswordFormValues={
      email:'',
    }
    expect(forgotpasswordFormGroup.value).toEqual(forgotpasswordFormValues);
  })
});
