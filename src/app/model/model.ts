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
  ADD = 'ADD',
  MOVE = 'MOVE',
  DELETE = 'DELETE'
}

export class DifferencingResult {
  jobIdBefore: string;
  jobIdAfter: string;
  repoSlug: string;
  treeBefore: BuildLogTree;
  treeAfter: BuildLogTree;
  editTree: EditTree;
  additions: number;
  deletions: number;
  moves: number;
  updates: number;
  messageList: Message[];

}

export class Message {
  message: string;
  messageType: MessageType;
}

export enum MessageType {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export class Settings {
  showAdditions = true;
  showDeletions = true;
  showUpdates = true;
  showMoves = false;
  wrapLines = false;
  differencer: string;
  highlightMove = true;
  differencesOnly = false;
  symmetricNodes = false;
  constructor() {}
}

export class MiniSurveyResult {
  useAgain: boolean;
  constructor (useAgain: boolean) {
    this.useAgain = useAgain;
  }
}

export class ContactEmail {
  email: string;
  constructor (email: string) {
    this.email = email;
  }
}

export class TrackingEvent {
  userId: string;
  repository: string;
  jobId1: string;
  jobId2: string;
  timeSpent: number;
  additions: boolean;
  deletions: boolean;
  updates: boolean;
  moves: boolean;
  highlight: boolean;
  wrap: boolean;
  symmetricNodes: boolean;
  differencesOnly: boolean;
  heartbeat: boolean;
  constructor() {}
}

export class BugReport {
  userId: string;
  repository: string;
  jobId1: string;
  jobId2: string;
  lineNr1: number;
  lineNr2: number;
  bug: string;
  constructor() {}
}

export class Job {
  id: number;
  number: string;
  finished_at: string;
  state: string;
}
