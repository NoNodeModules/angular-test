import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public myForm: FormGroup;
  public loginError: boolean = false;
  private admin: any = {
    username: 'admin',
    password: '12345'
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [ Validators.required]],
    })
  }

  public submit() {
    const username = this.myForm.controls.username.value;
    const password = this.myForm.controls.password.value;
    if (this.admin.username === username && this.admin.password === password) {
      localStorage.setItem('login', 'true');
      this.router.navigate(['/profile']);
    } else {
      this.loginError = true;
    } 
  }
}
