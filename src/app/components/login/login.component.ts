import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import { removeAuth} from "../../ngrx/ngrx.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private store: Store, private router: Router) {}

  logOut() {
    this.store.dispatch(removeAuth());
    this.router.navigate(['register']);
  }
}
