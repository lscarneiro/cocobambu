import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Observable} from "rxjs";
import {Recipe} from "../models/recipe";
import {AccessTokenService} from "../core/access-token.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient,
              private configService: ConfigService,
              private accessTokenService: AccessTokenService) {
  }

  apiUrl = this.configService.ApiUrl;

  listAll(): Observable<Recipe[]> {
    let token = this.accessTokenService.get();
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`, {
      headers: {
        authorization: token
      }
    });
  }

  findById(id: string): Observable<Recipe> {
    let token = this.accessTokenService.get();
    return this.http.get<Recipe>(`${this.apiUrl}/recipes/${id}`, {
      headers: {
        authorization: token
      }
    });
  }
}
