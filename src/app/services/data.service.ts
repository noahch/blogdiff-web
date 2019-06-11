import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DifferencingResult, EditAction, EditTree, Job, LineAction, LineActionType, NodeAction, NodeActionType} from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl  = 'http://localhost:8080/';
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', Authorization: 'Basic ' + btoa('admin' + ':' + 'password')});
  constructor(private httpClient: HttpClient) { }

  differencing(id1: number): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + 'differencing/' + id1, {headers: this.headers});
  }

  getJobs(id: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.baseUrl + 'jobs/' + id, {headers: this.headers});
  }
  differencingMulti(id1: string, id2: string): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + 'differencing/' + id1  + '/' + id2, {headers: this.headers});
  }
  getJobsForRepo(user: string, repository: string): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.baseUrl + 'repo/' + user + '/' + repository, {headers: this.headers});
  }
  survey(surveyResult: string): void {
    this.httpClient.post(this.baseUrl + 'survey', surveyResult, {headers: this.headers}).subscribe();
  }

}
