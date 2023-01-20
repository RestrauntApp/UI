import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent implements OnInit {
   public user: SocialUser = new SocialUser;
   	constructor(private authService: SocialAuthService, private router:Router) {}
ngOnInit() {
      this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>this.router.navigate(['home']));
  }
  public signOut(): void {
    this.authService.signOut();
  }
}




