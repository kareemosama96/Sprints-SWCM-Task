import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicianDetailsComponent } from './musician-details/musician-details.component';
import { DetailsRoutingModule } from './details-routing.module';


@NgModule({
  declarations: [
    MusicianDetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule {

 }
