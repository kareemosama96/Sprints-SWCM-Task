import { Injectable } from '@angular/core';
import { Musician } from './musician';
@Injectable({
  providedIn: 'root'
})
export class MusicionsService {
  musicians: Musician[] = [
    {
      id: 1,
      name: 'Eminem',
      country: 'USA',
      Songs: ['River', 'Runaway', 'The Marshall Mathers LP'],
      photoUrl: 'src/assets/Eminem.webp'
    },
    {
      id: 2,
      name: 'Taylor Swift',
      country: 'USA',
      Songs: ['Love Story', 'Blank Space', 'Everything Has Changed'],
      photoUrl: 'src/assets/Taylor-Swift.webp'
    },
    {
      id: 3,
      name: 'Queen',
      country: 'UK',
      Songs: ['Bohemian Rhapsody', 'Another One Bites The Dust', 'Ride The Lightning'],
      photoUrl: ''
    }
  ];
  constructor() { }
  getElementById(id: number): Musician | undefined {
    return this.musicians.find(m => m.id === id);
  }
}
