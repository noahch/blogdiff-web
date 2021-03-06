import {Component, HostListener, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildLogNode, BuildLogTree, DifferencingResult, EditAction, Job, MessageType, Settings} from '../model/model';
import {ActivatedRoute} from '@angular/router';
import {LoadingService} from '../services/loading.service';
import {Validators} from '@angular/forms';
import {NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {DiffSurveyComponent} from '../diff-survey/diff-survey.component';
import {TrackingService} from '../services/tracking.service';
import {SurveyComponent} from '../shared/survey/survey.component';
import {BugreportComponent} from '../shared/bugreport/bugreport.component';

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
  selectedLog1: string = undefined;
  selectedLog2: string  = undefined;

  manual_mode = true;
  repoSlug: string;
  showError = false;
  errorMsg = 'Not a valid pattern. Try "username/repository"';
  // buildLogIdAfter = 522909943;
  differencingResult: DifferencingResult;

  jobId_param: number;
  userId_param: string;
  settings: Settings;
  jobs: Job[];

  allowedToSend = false;
  interval;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.track();
  }
  @HostListener('window:click', [])
  onWindowClick() {
    this.track();
  }
  @HostListener('document:mousemove', [])
  onMouseMove() {
    this.track();
  }

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              public loadingService: LoadingService,
              private trackingService: TrackingService,
              private tooltips: NgbTooltipConfig,
              private modalService: NgbModal) {
    tooltips.container = 'body';
    this.route.queryParams.subscribe(params => {
      this.jobId_param = params['jobId'];
      this.userId_param = params['userId'];
      if (this.jobId_param !== undefined) {
         this.manual_mode = false;
      }
      if (this.userId_param === undefined) {
        if (localStorage.getItem('userId') !== null) {
          this.userId_param = localStorage.getItem('userId');
        } else {
          const uid =  this.getRandomToken();
          localStorage.setItem('userId', uid);
          this.userId_param = uid;
        }
      } else {
        localStorage.setItem('userId', this.userId_param);
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
        this.setTrackingEvent(false);
      } else {
        this.diff();
      }
    }
    this.interval = setInterval(() => {
      this.allowedToSend = true;
    }, 3000);
  }

  diff() {
    this.loadingService.startLoading();
    this.dataService.differencing(this.jobId_param).subscribe(value => {
      this.differencingResult = value;
      this.selectedLog1 = value.jobIdBefore;
      this.selectedLog2 = value.jobIdAfter;
      // this.differencingResult.editTree = this.dataService.mockTree();
      try {
        sessionStorage.setItem(this.jobId_param.toString(), JSON.stringify(this.differencingResult));
      } catch (e) {
        console.log('Local storage is full...');
      }
      console.log(this.differencingResult);
      this.loadingService.stopLoading();
      this.setTrackingEvent(false);
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
        try {
          sessionStorage.setItem(key, JSON.stringify(this.differencingResult));
        } catch (e) {
        console.log('Local storage is full...');
        }
        console.log(this.differencingResult);
        this.loadingService.stopLoading();
      });
    }
    this.setTrackingEvent(false);
  }

  diffMultiManual(): void {
    const key = this.selectedLog1 + '.' + this.selectedLog2;
    if (sessionStorage.getItem(key) !== null) {
      this.differencingResult = JSON.parse(sessionStorage.getItem(key));
    } else {
      this.loadingService.startLoading();
      this.dataService.differencingMultiManual(this.selectedLog1, this.selectedLog2).subscribe(value => {
        this.differencingResult = value;
        try {
          sessionStorage.setItem(key, JSON.stringify(this.differencingResult));
        } catch (e) {
          console.log('Local storage is full...');
        }
        console.log(this.differencingResult);
        this.loadingService.stopLoading();
      });
    }
    this.setTrackingEvent(false);
  }

  diffManual() {
    if (this.repoSlug.match('^\\w*\\/[a-zA-Z0-9-]*$') !== null) {
      this.showError = false;
      this.loadingService.startLoading();
      const repoSplit = this.repoSlug.split('/');
      this.dataService.getJobsForRepo(repoSplit[0], repoSplit[1]).subscribe(value => {
        if (value !== null) {
          this.jobs = value;
          this.differencingResult = undefined;
          this.manual_mode = false;
        } else {
          this.errorMsg = 'Not a valid repository or jobs could not be loaded.';
          this.showError = true;
        }
        console.log(value);
        this.loadingService.stopLoading();
      });
    } else {
      this.errorMsg = 'Not a valid pattern. Try "username/repository"';
      this.showError = true;
    }
    return;
  }

  diffManualLogs() {
    this.showError = false;
    this.loadingService.startLoading();
    this.dataService.differencingMulti(this.selectedLog1, this.selectedLog2).subscribe(value => {
      if (value !== null) {
        this.differencingResult = value;
        this.manual_mode = false;
      } else {
        this.errorMsg = 'Not a valid repository or jobs could not be loaded.';
        this.showError = true;
      }
      console.log(value);
      this.loadingService.stopLoading();
    });
  }

  containsErrors(): boolean {
    if (this.differencingResult !== undefined && this.differencingResult.messageList !== undefined && this.differencingResult.messageList !== null) {
      if (this.differencingResult.messageList.filter(value => value.messageType === MessageType.ERROR).length > 0) {
        return true;
      }
    }
    return false;
  }


  getSubEditTreeForNode(node: BuildLogNode): EditAction {
    return this.differencingResult.editTree.childrenActions.find(value => value.nodeName === node.nodeName);
  }

  toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  track(): void {
    if (this.allowedToSend) {
        this.setTrackingEvent(true);
        this.allowedToSend = false;
    }
  }

  setTrackingEvent(heartbeat: boolean): void {
    if (this.differencingResult !== undefined) {
      console.log(this.differencingResult);
      const trackingEvent = this.trackingService.createNewTrackingEvent();
      trackingEvent.jobId1 = this.differencingResult.jobIdBefore;
      trackingEvent.jobId2 = this.differencingResult.jobIdAfter;
      trackingEvent.userId = this.userId_param;
      trackingEvent.additions = this.settings.showAdditions;
      trackingEvent.deletions = this.settings.showDeletions;
      trackingEvent.moves = this.settings.showMoves;
      trackingEvent.updates = this.settings.showUpdates;
      trackingEvent.highlight = this.settings.highlightMove;
      trackingEvent.wrap = this.settings.wrapLines;
      trackingEvent.differencesOnly = this.settings.differencesOnly;
      trackingEvent.symmetricNodes = this.settings.symmetricNodes;
      trackingEvent.repository = this.differencingResult.repoSlug;
      trackingEvent.heartbeat = heartbeat;
    }
  }

  getRandomToken(): string {
    const randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    let hex = '';
    for (let i = 0; i < randomPool.length; ++i) {
      hex += randomPool[i].toString(16);
    }
    return hex;
  }

  reportBug() {
    const modalRef = this.modalService.open(BugreportComponent);
    if (this.differencingResult) {
      modalRef.componentInstance.repository = this.differencingResult.repoSlug;
      modalRef.componentInstance.jobId1 = this.differencingResult.jobIdBefore;
      modalRef.componentInstance.jobId2 = this.differencingResult.jobIdAfter;
    }
  }
}
