import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  ApiUrl: string = 'http://localhost:3000';
}
