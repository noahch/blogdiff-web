import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildLogNode, BuildLogTree, DifferencingResult, EditAction} from '../model/model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  // buildLogIdBefore = 528819683;
  // buildLogIdAfter = 528819683;
  buildLogIdBefore = 527009658;
  buildLogIdAfter = 526933018;

  // buildLogIdAfter = 522909943;
  loading = true;
  differencingResult: DifferencingResult;

  param1: string;
  param2: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['jobId'];
      this.param2 = params['userId'];
    });
  }


  ngOnInit() {
    console.log(this.param1);
    console.log(this.param2);
    if (sessionStorage.getItem('Log') !== null) {
      this.differencingResult = JSON.parse(sessionStorage.getItem('Log'));
      console.log(this.differencingResult);
      this.loading = false;
    } else {
      this.diff();
    }
  }

  diff() {
    this.loading = true;
    this.dataService.differencing(this.buildLogIdBefore, this.buildLogIdAfter).subscribe(value => {
      this.differencingResult = value;
      // this.differencingResult.editTree = this.dataService.mockTree();
      sessionStorage.setItem('Log', JSON.stringify(this.differencingResult));
      console.log(this.differencingResult);
      this.loading = false;
    });
  }

  getSubEditTreeForNode(node: BuildLogNode): EditAction {
    return this.differencingResult.editTree.childrenActions.find(value => value.nodeName === node.nodeName);
  }

}
