import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AccessTokenService} from "../core/access-token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private accessTokenService: AccessTokenService) {
  }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      username: [null],
      password: [null],
    });
  }

  login() {
    if (!this.formGroup.valid) {
      alert('Nome de usuário e senha obrigatórios');
      return;
    }
    let login = Object.assign({}, this.formGroup.value);
    this.loginService.authenticate(login).subscribe(data => {
      this.accessTokenService.set(data.token);
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status == 400) {
          alert('Verifique se preencheu os campos corretamente e tente novamente.');
        } else if (err.status == 403) {
          alert('Nome de usuário e/ou senha inválido(s).');
        }
      }
    });
  }
}
