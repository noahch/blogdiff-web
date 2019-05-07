/**
 * Created by Noah Chavannes on 04.05.2019.
 */
import {RouterModule, Routes} from '@angular/router';
import {DiffComponent} from './diff/diff.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: 'differencing',
    component: DiffComponent
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

