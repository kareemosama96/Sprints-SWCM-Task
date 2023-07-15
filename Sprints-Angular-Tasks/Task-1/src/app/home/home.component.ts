import { Component, inject } from '@angular/core';
import { MusicionsService } from '../musicions.service';
import { Musician } from '../musician';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  musicianService = inject(MusicionsService);
  musicians: Musician[] = this.musicianService.musicians;
  addNewMusician(name: string) {
    this.musicians.push({
      id: this.musicians.length + 1,
      name: name,
      country: 'USA',
      Songs: ['Song1', 'Song2', 'Song3'],
      photoUrl: ''
    });
  }
}
