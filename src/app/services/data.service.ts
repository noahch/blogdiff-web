import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DifferencingResult, EditAction, EditTree, LineAction, LineActionType, NodeAction, NodeActionType} from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl  = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  differencing(id1: number, id2: number): Observable<DifferencingResult> {
    return this.httpClient.get<DifferencingResult>(this.baseUrl + id1  + '/' + id2);
  }

  mockTree(): EditTree {

    const tree = new EditTree();
    const actions: EditAction[] = [];
    const travis = new EditAction();
    travis.nodeName = 'Travis';
    const travisChildren: EditAction[] = [];

    const maven = new EditAction();
    maven.nodeName = 'Maven';
    const mavenChildren: EditAction[] = [];

    const m1 = new EditAction();
    m1.nodeName = 'BLogDiff 0.0.1-SNAPSHOT';
    const m1Children: EditAction[] = [];
    const m1g1 = new EditAction();
    m1g1.nodeName = 'maven-resources-plugin:3.1.0 resources';
    m1Children.push(m1g1);
    const m1g2 = new EditAction();
    m1g2.nodeName = 'maven-compiler-plugin:3.8.0 compile';
    m1Children.push(m1g2);
    const m1g3 = new EditAction();
    m1g3.nodeName = 'maven-resources-plugin:3.1.0 testResources';
    m1Children.push(m1g3);
    const m1g4 = new EditAction();
    m1g4.nodeName = 'maven-compiler-plugin:3.8.0 testCompile';
    m1Children.push(m1g4);
    const m1g5 = new EditAction();
    m1g5.nodeName = 'maven-surefire-plugin:2.22.1 test';
    m1Children.push(m1g5);
    const m1g6 = new EditAction();
    m1g6.nodeName = 'maven-jar-plugin:3.1.1 jar';
    m1Children.push(m1g6);
    const m1g8 = new EditAction();
    m1g8.nodeName = 'spring-boot-maven-plugin:2.1.4.RELEASE repackage';
    m1Children.push(m1g8);
    const m1g7 = new EditAction();
    m1g7.nodeName = 'maven-install-plugin:2.5.2 install';
    const m1g7lineAction: LineAction[] = [];
    const m1g1l1 = new LineAction();
    m1g1l1.type = LineActionType.ADD;
    m1g1l1.contentBefore = '';
    // tslint:disable-next-line:max-line-length
    m1g1l1.contentAfter = 'Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/3.8.1/junit-3.8.1.pom (998 B at <...>)';
    m1g1l1.positionBefore = 0;
    m1g1l1.positionAfter = 2;

    const m1g1l2 = new LineAction();
    m1g1l2.type = LineActionType.DELETE;
    // tslint:disable-next-line:max-line-length
    m1g1l2.contentBefore = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (42 kB at <...>)';
    m1g1l2.contentAfter = '';
    m1g1l2.positionBefore = 5;
    m1g1l2.positionAfter = 0;

    const m1g1l3 = new LineAction();
    m1g1l3.type = LineActionType.UPDATE;
    // tslint:disable-next-line:max-line-length
    m1g1l3.contentBefore = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (42 kB at <...>)';
    // tslint:disable-next-line:max-line-length
    m1g1l3.contentAfter = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (43 kB at <...>)';
    m1g1l3.positionBefore = 8;
    m1g1l3.positionAfter = 8;

    const m1g1l4 = new LineAction();
    m1g1l4.type = LineActionType.MOVE;
    // tslint:disable-next-line:max-line-length
    m1g1l4.contentBefore = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (42 kB at <...>)';
    // tslint:disable-next-line:max-line-length
    m1g1l4.contentAfter = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (43 kB at <...>)';
    m1g1l4.positionBefore = 10;
    m1g1l4.positionAfter = 12;

    const m1g1l5 = new LineAction();
    m1g1l5.type = LineActionType.MOVE;
    // tslint:disable-next-line:max-line-length
    m1g1l5.contentBefore = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (42 kB at <...>)';
    // tslint:disable-next-line:max-line-length
    m1g1l5.contentAfter = '[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (43 kB at <...>)';
    m1g1l5.positionBefore = 20;
    m1g1l5.positionAfter = 16;

    m1g7lineAction.push(m1g1l1);
    m1g7lineAction.push(m1g1l2);
    m1g7lineAction.push(m1g1l3);
    m1g7lineAction.push(m1g1l4);
    m1g7lineAction.push(m1g1l5);
    m1g7.linesBeforeActions  = m1g7lineAction;
    m1Children.push(m1g7);

    const nodeActions: NodeAction[] = [];
    const na = new NodeAction();
    na.type = NodeActionType.ADD;
    na.nodeName = 'maven-jar-plugin:3.1.1 jar';
    na.positionBefore = 0;
    na.positionAfter = 6;
    nodeActions.push(na);
    const na2 = new NodeAction();
    na2.type = NodeActionType.DELETE;
    na2.nodeName = 'maven-resources-plugin:3.1.0 testResources';
    na2.positionBefore = 4;
    na2.positionAfter = 0;
    nodeActions.push(na2);
    const na3 = new NodeAction();
    na3.type = NodeActionType.MOVE;
    na3.nodeName = 'maven-compiler-plugin:3.8.0 compile';
    na2.positionBefore = 2;
    na2.positionAfter = 4;
    nodeActions.push(na3);
    m1.nodeActions = nodeActions;


    m1.childrenActions = m1Children;
    mavenChildren.push(m1);


    const m2 = new EditAction();
    m2.nodeName = 'BLogDiff 0.0.1-SNAPSHOT';
    const m2Children: EditAction[] = [];
    const m2g1 = new EditAction();
    m2g1.nodeName = 'maven-resources-plugin:3.1.0 resources';
    m2Children.push(m2g1);
    const m2g2 = new EditAction();
    m2g2.nodeName = 'maven-compiler-plugin:3.8.0 compile';
    m2Children.push(m2g2);
    const m2g3 = new EditAction();
    m2g3.nodeName = 'maven-resources-plugin:3.1.0 testResources';
    m2Children.push(m2g3);
    const m2g4 = new EditAction();
    m2g4.nodeName = 'maven-compiler-plugin:3.8.0 testCompile';
    m2Children.push(m2g4);
    const m2g5 = new EditAction();
    m2g5.nodeName = 'maven-surefire-plugin:2.22.1 test';
    m2Children.push(m2g5);
    m2.childrenActions = m2Children;
    mavenChildren.push(m2);




    maven.childrenActions = mavenChildren;
    travisChildren.push(maven);
    travis.childrenActions = travisChildren;


    // const nodeActionst: NodeAction[] = [];
    // const nat = new NodeAction();
    // nat.type = NodeActionType.ADD;
    // nat.nodeName = 'Maven';
    // nat.position = 1;
    // nodeActionst.push(nat);
    // travis.nodeActions = nodeActionst;

    actions.push(travis);
    tree.childrenActions = actions;



    return tree;
  }

}
