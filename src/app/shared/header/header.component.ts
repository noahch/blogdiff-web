import { Component, OnInit } from '@angular/core';
import {DiffSurveyComponent} from '../../diff-survey/diff-survey.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  interval;
  ngOnInit() {

      this.interval = setInterval(() => {
        const alreadySent = sessionStorage.getItem('surveySent');
        if (alreadySent !== 'true') {
          this.openSurvey();
        }
        clearInterval(this.interval);
      }, 30000);


  }

  openSurvey() {
    this.modalService.open(DiffSurveyComponent, { size: 'lg' });
  }
  openInfo() {
    this.modalService.open(DiffSurveyComponent, { size: 'lg' });
  }

}
