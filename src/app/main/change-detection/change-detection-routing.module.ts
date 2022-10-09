import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'',
    component:GrandParentComponent
  },
  // {
  //   path:'**',
  //   redirectTo:'change-detection'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
