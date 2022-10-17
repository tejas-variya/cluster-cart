import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrackByComponent } from './track-by.component';
import { FeatherIconDirective } from '@core/directives/core-feather-icons/core-feather-icons';


const routes = [
  {
    path: '',
    component: TrackByComponent,
  }
];


@NgModule({
  declarations: [TrackByComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class TrackByModule { }
