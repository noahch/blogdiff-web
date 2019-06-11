/**
 * Created by Noah Chavannes on 04.05.2019.
 */
import {RouterModule, Routes} from '@angular/router';
import {DiffComponent} from './diff/diff.component';
import {NgModule} from '@angular/core';
import {DiffSurveyComponent} from './diff-survey/diff-survey.component';

const appRoutes: Routes = [
  { path: 'differencing',
    component: DiffComponent
  },
  { path: 'survey',
    component: DiffSurveyComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRouting {
}

