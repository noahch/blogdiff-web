import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BuildLog} from '../model/model';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl  = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  log(): Observable<BuildLog> {
    return this.httpClient.get<BuildLog>(this.baseUrl + '522909943');
  }
}
