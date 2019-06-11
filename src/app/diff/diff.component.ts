import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildLogNode, BuildLogTree, DifferencingResult, EditAction, Job, Settings} from '../model/model';
import {ActivatedRoute} from '@angular/router';
import {LoadingService} from '../services/loading.service';
import {Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DiffSurveyComponent} from '../diff-survey/diff-survey.component';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  // buildLogIdBefore = 528819683;
  // buildLogIdAfter = 528819683;
  // jobIdBefore = 522900016;
  buildLogIdAfter = 526933018;
  selectedLog1: string = null;
  selectedLog2: string  = null;

  manual_mode = true;
  repoSlug: string;
  showError = false;
  // buildLogIdAfter = 522909943;
  differencingResult: DifferencingResult;

  jobId_param: number;
  userId_param: string;
  settings: Settings;
  jobs: Job[];


  constructor(private dataService: DataService, private route: ActivatedRoute, public loadingService: LoadingService, private modalService: NgbModal) {
    this.route.queryParams.subscribe(params => {
      this.jobId_param = params['jobId'];
      this.userId_param = params['userId'];
      if (this.jobId_param !== undefined) {
         this.manual_mode = false;
      }
    });
    this.settings = new Settings();
  }


  ngOnInit() {
    if (!this.manual_mode) {
      if (this.jobId_param !== undefined) {
        this.loadingService.startLoading();
        this.dataService.getJobs(this.jobId_param).subscribe(value => {
          this.jobs = value;
          this.loadingService.stopLoading();
        });
      }
      if (sessionStorage.getItem(this.jobId_param.toString()) !== null) {
        this.differencingResult = JSON.parse(sessionStorage.getItem(this.jobId_param.toString()));
        this.selectedLog1 = this.differencingResult.jobIdBefore;
        this.selectedLog2 = this.differencingResult.jobIdAfter;
      } else {
        this.diff();
      }
    }
  }

  diff() {
    this.loadingService.startLoading();
    this.dataService.differencing(this.jobId_param).subscribe(value => {
      this.differencingResult = value;
      this.selectedLog1 = value.jobIdBefore;
      this.selectedLog2 = value.jobIdAfter;
      // this.differencingResult.editTree = this.dataService.mockTree();
      sessionStorage.setItem(this.jobId_param.toString(), JSON.stringify(this.differencingResult));
      console.log(this.differencingResult);
      this.loadingService.stopLoading();
    });
  }

  diffMulti() {
    const key = this.selectedLog1 + '.' + this.selectedLog2;
    if (sessionStorage.getItem(key) !== null) {
      this.differencingResult = JSON.parse(sessionStorage.getItem(key));
    } else {
      this.loadingService.startLoading();
      this.dataService.differencingMulti(this.selectedLog1, this.selectedLog2).subscribe(value => {
        this.differencingResult = value;
        sessionStorage.setItem(key, JSON.stringify(this.differencingResult));
        console.log(this.differencingResult);
        this.loadingService.stopLoading();
      });
    }
  }

  diffManual() {

    if (this.repoSlug.match('^\\w*\\/\\w*$') !== null) {
      this.showError = false;
      this.loadingService.startLoading();
      const repoSplit = this.repoSlug.split('/');
      this.dataService.getJobsForRepo(repoSplit[0], repoSplit[1]).subscribe(value => {

        console.log(value);
        this.loadingService.stopLoading();
      });
    } else {
      this.showError = true;
    }
    return;


  }


  getSubEditTreeForNode(node: BuildLogNode): EditAction {
    return this.differencingResult.editTree.childrenActions.find(value => value.nodeName === node.nodeName);
  }

  toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
