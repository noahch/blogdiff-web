import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildLogNode, BuildLogTree, DifferencingResult, EditAction} from '../model/model';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  // buildLogIdBefore = 528819683;
  // buildLogIdAfter = 528819683;
  buildLogIdBefore = 527009657;
  buildLogIdAfter = 526933017;

  // buildLogIdAfter = 522909943;
  loading = true;
  differencingResult: DifferencingResult;
  constructor(private dataService: DataService) { }


  ngOnInit() {
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
