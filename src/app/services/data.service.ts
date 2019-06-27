import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  BugReport,
  ContactEmail,
  DifferencingResult,
  EditAction,
  EditTree,
  Job,
  LineAction,
  LineActionType,
  MiniSurveyResult,
  NodeAction,
  NodeActionType, TrackingEvent
} from '../model/model';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl  = environment.backend_url;
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', Authorization: 'Basic ' + btoa('admin' + ':' + 'password')});
  constructor(private httpClient: HttpClient) { }

  differencing(id1: number): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + '/differencing/' + id1, {headers: this.headers});
  }
  getJobs(id: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.baseUrl + '/jobs/' + id, {headers: this.headers});
  }
  differencingMulti(id1: string, id2: string): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + '/differencing/' + id1  + '/' + id2, {headers: this.headers});
  }
  differencingMultiManual(id1: string, id2: string): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + '/differencing/manual/' + id1  + '/' + id2, {headers: this.headers});
  }
  getJobsForRepo(user: string, repository: string): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.baseUrl + '/repo/' + user + '/' + repository, {headers: this.headers});
  }
  survey(surveyResult: string): void {
    this.httpClient.post(this.baseUrl + '/survey', surveyResult, {headers: this.headers}).subscribe();
  }
  miniSurvey(miniSurveyResult: MiniSurveyResult): void {
    this.httpClient.post(this.baseUrl + '/miniSurvey', miniSurveyResult, {headers: this.headers}).subscribe();
  }
  contactEmail(email: ContactEmail): void {
    this.httpClient.post(this.baseUrl + '/contact', email, {headers: this.headers}).subscribe();
  }
  saveTracking(tracking: TrackingEvent): void {
    this.httpClient.post(this.baseUrl + '/tracking', tracking, {headers: this.headers}).subscribe();
  }
  saveBug(bug: BugReport): void {
    this.httpClient.post(this.baseUrl + '/bug', bug, {headers: this.headers}).subscribe();
  }
}
