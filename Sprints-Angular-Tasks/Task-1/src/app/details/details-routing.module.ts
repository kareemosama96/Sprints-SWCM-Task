import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicianDetailsComponent } from './musician-details/musician-details.component';
const routes: Routes = [
  { path: '', component: MusicianDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
