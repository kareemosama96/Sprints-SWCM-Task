import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicionsService } from 'src/app/musicions.service';
import { Musician } from 'src/app/musician';
@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrls: ['./musician-details.component.scss']
})
export class MusicianDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  musiciansService = inject(MusicionsService);
  musician: Musician | undefined;
  constructor(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musician = this.musiciansService.getElementById(id);
  }  
}
