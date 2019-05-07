import {Component, Input, OnInit} from '@angular/core';
import {BuildLogNode, EditAction, LineAction, LineActionType, NodeAction, NodeActionType} from '../../model/model';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@Component({
  selector: 'app-node-displayer',
  templateUrl: './node-displayer.component.html',
  styleUrls: ['./node-displayer.component.css']
})
export class NodeDisplayerComponent implements OnInit {

  @Input()
  buildLogNode: BuildLogNode;

  @Input()
  editAction: EditAction;

  @Input()
  leftNode: boolean;

  @Input()
  parentActions: NodeAction[];

  constructor() { }

  ngOnInit() {
    // console.log('----------------------------');
    // console.log(this.buildLogNode.nodeName);
    // console.log(this.editAction);
    // console.log('----------------------------');
  }

  getClassForLine(lineActions: LineAction[], lineNr: number): string {
    if (lineActions !== undefined) {
      let lineAction: LineAction = lineActions.find(value => {
        return value.positionAfter === lineNr && value.type === LineActionType.ADD;
      });
      if (lineAction !== undefined) {
        if (!this.leftNode) {
          return 'add';
        }
      }
      lineAction = lineActions.find(value => {
        return value.positionBefore === lineNr && value.type === LineActionType.DELETE;
      });
      if (lineAction !== undefined) {
        if (this.leftNode) {
          return 'delete';
        }
      }
      lineAction = lineActions.find(value => {
        return value.positionBefore === lineNr && value.positionAfter === lineNr && value.type === LineActionType.UPDATE;
      });
      if (lineAction !== undefined) {
          return 'update';
      }
      lineAction = lineActions.find(value => {
        return ((value.positionBefore === lineNr && this.leftNode ) || ( value.positionAfter === lineNr && !this.leftNode)) && value.type === LineActionType.MOVE;
      });
      if (lineAction !== undefined) {
        return 'move' + ' ' + 'm' + lineAction.positionBefore + '_' + lineAction.positionAfter;
      }
      return '';
    }
  }

  getClassForNode(nodeActions: NodeAction[], nodename: string): string {
    console.log('----------------------------');
    console.log(this.buildLogNode.nodeName);
    console.log(this.parentActions);
    console.log('----------------------------');
    if (nodeActions !== undefined) {
      const nodeAction: NodeAction = nodeActions.find(value => {
        return value.nodeName === nodename;
      });
      if (nodeAction !== undefined) {
        if (nodeAction.type === NodeActionType.ADD && !this.leftNode) {
          return 'add-node';
        }
        if (nodeAction.type === NodeActionType.DELETE && this.leftNode) {
          return 'delete-node';
        }
        if (nodeAction.type === NodeActionType.MOVE) {
          return 'move-node';
        }
      }
    }
    return '';
  }


  getSubEditTreeForNode(node: BuildLogNode): EditAction {
    return this.editAction.childrenActions.find(value => value.nodeName === node.nodeName);
  }

}
