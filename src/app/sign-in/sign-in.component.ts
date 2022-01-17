import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  logInForm:any;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }


  onSubmit() {
    console.log(this.logInForm.value);
      this.authService.login(this.logInForm.value);
      this.logInForm.reset();
   
  }


  createForm(){
    this.logInForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

}
