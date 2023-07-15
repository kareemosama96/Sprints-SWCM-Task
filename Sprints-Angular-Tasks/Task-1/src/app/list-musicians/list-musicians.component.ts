import { Component, Input } from '@angular/core';
import { Musician } from '../musician';
@Component({
  selector: 'app-list-musicians',
  templateUrl: './list-musicians.component.html',
  styleUrls: ['./list-musicians.component.scss']
})
export class ListMusiciansComponent {
  @Input() mucision!: Musician;  
}
