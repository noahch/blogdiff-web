/**
 * Created by Noah Chavannes on 04.05.2019.
 */
export class BuildLog {
  ciComponent: TravisComponent ;
  buildComponent: MvnComponent;
}

export class Component {
  parserClass: string;
}

export class MvnComponent extends Component {
  linesBeforeModules: LogLine[];
  linesAfterModules: LogLine[];
  modules: Module[];
}

export class TravisComponent extends Component {
  logLines: LogLine[];
  linesAfterModules: LogLine[];
}

export class Module {
  name: string;
  linesBeforeGoals: LogLine[];
  goals: Goal[];
  displayed = true;
}

export class Goal {
  plugin: string;
  goal: string;
  logLines: LogLine[];
}

export class LogLine {
  content: string;
  lineIndex: number;
}
