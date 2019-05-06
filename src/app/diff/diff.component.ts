import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildLog} from '../model/model';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  buildLog: BuildLog;
  buildLogLeftNr = 0;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    if (sessionStorage.getItem('Loxxxg') !== null) {
      this.buildLog = JSON.parse(sessionStorage.getItem('Log'));
      console.log(this.buildLog);
    } else {
      this.dataService.log().subscribe(data => {
        this.buildLog = data;
        sessionStorage.setItem('Log', JSON.stringify(data));
        console.log(this.buildLog);
      });
    }
  }


}
