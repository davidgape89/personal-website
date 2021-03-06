import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
