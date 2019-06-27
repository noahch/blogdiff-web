import {Component, Input, OnInit} from '@angular/core';
import {BuildLogNode, EditAction, LineAction, LineActionType, NodeAction, NodeActionType, Settings} from '../../model/model';

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

  @Input()
  settings: Settings;

  constructor() { }

  ngOnInit() {
    if (!this.leftNode) {
      this.editAction.linesBeforeActions.forEach(value => {
        if (value.type === LineActionType.UPDATE) {
          const line = this.buildLogNode.linesBefore.find(value1 => {
            return value1.internalLineIndex === value.positionAfter && value1.internalLineIndex === value.positionBefore;
          });
          if (line !== undefined) {
            line.content = this.highlightString(value.contentAfter, value.contentBefore);
          }
        }
      });
    }
  }

  getClassForLine(lineActions: LineAction[], lineNr: number): string {
    if (lineActions !== undefined && lineActions !== null) {
      let lineAction: LineAction = lineActions.find(value => {
        return value.positionAfter === lineNr && value.type === LineActionType.ADD;
      });
      if (lineAction !== undefined) {
        if (!this.leftNode) {
          if (this.settings.showAdditions) {
            return 'add';
          }
        }
      }
      lineAction = lineActions.find(value => {
        return value.positionBefore === lineNr && value.type === LineActionType.DELETE;
      });
      if (lineAction !== undefined) {
        if (this.leftNode) {
          if (this.settings.showDeletions) {
            return 'delete';
          }
        }
      }
      lineAction = lineActions.find(value => {
        return value.positionBefore === lineNr && value.positionAfter === lineNr && value.type === LineActionType.UPDATE;
      });
      if (lineAction !== undefined) {
        if (this.settings.showUpdates) {
          return 'update';
        }
      }
      lineAction = lineActions.find(value => {
        return ((value.positionBefore === lineNr && this.leftNode ) || ( value.positionAfter === lineNr && !this.leftNode)) && value.type === LineActionType.MOVE;
      });
      if (lineAction !== undefined) {
        if (this.settings.showMoves) {
          return 'move' + ' ' + 'm' + lineAction.positionBefore + '_' + lineAction.positionAfter;
        }
      }
      if (this.settings.differencesOnly) {
        return 'none';
      }
      return '';
    }
  }

  getClassForNode(nodeActions: NodeAction[], nodename: string): string {
    // console.log('----------------------------');
    // console.log(this.buildLogNode.nodeName);
    // console.log(this.parentActions);
    // console.log('----------------------------');
    if (nodeActions !== undefined) {
      const nodeAction: NodeAction = nodeActions.find(value => {
        return value.nodeName === nodename;
      });
      if (nodeAction !== undefined) {
        if (nodeAction.type === NodeActionType.ADD && !this.leftNode && this.settings.showAdditions) {

          if (!this.settings.symmetricNodes) {
            return 'add-node';
          } else {
            return 'none';
          }
        }
        if (nodeAction.type === NodeActionType.DELETE && this.leftNode && this.settings.showDeletions) {
          if (!this.settings.symmetricNodes) {
            return 'delete-node';
          } else {
            return 'none';
          }
        }
        if (nodeAction.type === NodeActionType.MOVE && this.settings.showMoves) {
          return 'move-node';
        }
      }
    }
    return '';
  }


  getSubEditTreeForNode(node: BuildLogNode): EditAction {
    return this.editAction.childrenActions.find(value => value.nodeName === node.nodeName);
  }

  highlightPair(event) {
    if (this.settings.highlightMove) {
      const classList: string [] = event.target.classList;
      for (const c of classList) {
        console.log(c);
      }
      const lines = document.getElementsByClassName(classList[2]);
      // @ts-ignore
      for (const l of lines) {
        l.classList.add('move-highlighted');
      }
    }
  }

  removeHighlight() {
    const lines = document.getElementsByClassName('move-highlighted');
    // @ts-ignore
    for (const l of lines) {
      l.classList.remove('move-highlighted');
    }
  }

   highlightString (afterText: string, beforeText: string): string {
    let text = '';
     afterText.split('').forEach(function(val, i) {
      if (val !== beforeText.charAt(i)) {
        text += '<span class="detail-highlight">' + val + '</span>';
      } else {
        text += val;
      }
    });
    return text;
  }

}
