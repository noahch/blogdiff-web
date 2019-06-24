import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {MiniSurveyResult} from '../model/model';

@Component({
  selector: 'app-mini-survey',
  templateUrl: './mini-survey.component.html',
  styleUrls: ['./mini-survey.component.css']
})
export class MiniSurveyComponent implements OnInit {

  surveySubmitted = false;
  visible = false;
  interval;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.interval = setInterval(() => {
      this.visible = true;
      clearInterval(this.interval);
    }, 10000);
  }

  submitSurvey(useAgain: boolean): void {
    const sr = new MiniSurveyResult(useAgain);
    this.dataService.miniSurvey(sr);
    this.surveySubmitted = true;
  }

}
