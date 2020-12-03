import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fauser = faUser
  fakey = faKey

  constructor() { }

  ngOnInit(): void {
  }

}
