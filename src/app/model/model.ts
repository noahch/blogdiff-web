/**
 * Created by Noah Chavannes on 04.05.2019.
 */

export class LogLine {
  content: string;
  lineIndex: number;
  internalLineIndex: number;
}

export class BuildLogTree {
  nodes: BuildLogNode[];
}

export class BuildLogNode {
  nodeName: string;
  linesBefore: LogLine[];
  logNodes: BuildLogNode[];
  linesAfter: LogLine[];
  displayed = true;
}

export class EditTree {
  nodeActions: NodeAction[];
  childrenActions: EditAction[];

}

export class EditAction {
  nodeName: string;
  linesBeforeActions: LineAction[];
  linesAfterActions: LineAction[];
  nodeActions: NodeAction[];
  childrenActions: EditAction[];

}

export class LineAction {
  contentBefore: string;
  contentAfter: string;
  positionBefore: number;
  positionAfter: number;
  type: LineActionType;
}

export enum LineActionType {
  ADD = 'ADD',
  MOVE = 'MOVE',
  DELETE = 'DELETE',
  UPDATE= 'UPDATE'
}

export class NodeAction {
  nodeName: string;
  positionBefore: number;
  positionAfter: number;
  type: NodeActionType;
}

export enum NodeActionType {
  ADD,
  MOVE,
  DELETE
}

export class DifferencingResult {
  jobIdBefore: string;
  jobIdAfter: string;
  treeBefore: BuildLogTree;
  treeAfter: BuildLogTree;
  editTree: EditTree;
  additions: number;
  deletions: number;
  moves: number;
  updates: number;
}

export class Settings {
  showAdditions = true;
  showDeletions = true;
  showUpdates = true;
  showMoves = true;
  wrapLines = true;
  differencer: string;
  highlightMove = true;
  constructor() {}
}

export class Job {
  id: number;
  number: string;
  finished_at: string;
}
