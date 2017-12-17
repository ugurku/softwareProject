import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestDetailPage } from './interest-detail';

@NgModule({
  declarations: [
    InterestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestDetailPage),
  ],
})
export class InterestDetailPageModule {}
