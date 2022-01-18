import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  singUpForm:any;
  isLoading= false;
  constructor( private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  backToLogIn(){
    this.router.navigate(['/login']);
  }

  createForm(){
    this.singUpForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.singUpForm.value);
    this.isLoading =  true;
      this.authService.signUp(this.singUpForm.value).subscribe(res=>{
        console.log(res);
        this.isLoading =  false;
      }, error => {
        console.log(error);
        this.isLoading =  false;
      })
      this.singUpForm.reset();
   
  }
}
