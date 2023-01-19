import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { User } from 'src/app/models/user';
import { LogInService } from 'src/app/services/log-in.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userLoggedIn = false;
  currentUser!: User;
  loginForm: FormGroup = this.fb.group({});


  constructor(private httpServ: LogInService, private router: Router,
    private transfer: TransferService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], { updateOn: 'blur' }],
      password: ['', Validators.required],
    });
  }

  fieldInvalid(formControl: AbstractControl){
    return formControl.invalid && formControl.dirty;
  }

  onSubmit(): void{
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.httpServ.logIn(email,password).pipe(
      tap(response => this.currentUser = new User())
    ).subscribe((response) => this.userLoggedIn = true);
  }

}



