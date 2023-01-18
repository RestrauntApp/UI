import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
userLoggedIn = false;
user = new User();

}
