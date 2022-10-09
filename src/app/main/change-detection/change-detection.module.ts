import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    GrandParentComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule
  ]
})
export class ChangeDetectionModule { }
