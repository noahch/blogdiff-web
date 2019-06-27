/**
 * Created by Noah Chavannes on 04.05.2019.
 */
import {RouterModule, Routes} from '@angular/router';
import {DiffComponent} from './diff/diff.component';
import {NgModule} from '@angular/core';
import {DiffSurveyComponent} from './diff-survey/diff-survey.component';
import {HomeComponent} from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'differencing',
    component: DiffComponent
  },
  { path: 'survey',
    component: DiffSurveyComponent
  },
  { path: 'privacy',
    component: PrivacyComponent
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

