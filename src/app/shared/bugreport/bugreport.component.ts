import {Component, Input, OnInit} from '@angular/core';
import {BugReport} from '../../model/model';
import {DataService} from '../../services/data.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bugreport',
  templateUrl: './bugreport.component.html',
  styleUrls: ['./bugreport.component.css']
})
export class BugreportComponent implements OnInit {
  @Input()
  jobId1: number;
  @Input()
  jobId2: number;
  @Input()
  repository: string;

  bug: BugReport;
  bugSent = false;
  constructor(private dataService: DataService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.bug = new BugReport();
  }

  reportBug() {
    if (this.repository !== undefined) {
      this.bug.repository = this.repository;
    }
    if (this.jobId1 !== undefined) {
      this.bug.jobId1 = this.jobId1.toString();
    }
    if (this.jobId2 !== undefined) {
      this.bug.jobId2 = this.jobId2.toString();
    }
    this.bug.userId = localStorage.getItem('userId');
    this.dataService.saveBug(this.bug);
    this.bugSent = true;
  }
}
