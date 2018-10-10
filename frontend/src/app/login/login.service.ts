import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Login} from "../models/login";
import {TokenResponse} from "../models/token-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private configService: ConfigService) {
  }

  apiUrl = this.configService.ApiUrl;

  authenticate(login: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/login`, login);
  }
}
