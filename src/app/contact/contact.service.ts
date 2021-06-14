import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions = {
    headers: new HttpHeaders({ContentType: 'application/json'})
  };
  
  constructor() { }
}
