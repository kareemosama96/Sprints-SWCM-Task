import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-musician',
  templateUrl: './add-musician.component.html',
  styleUrls: ['./add-musician.component.scss']
})
export class AddMusicianComponent {
  @Output() musicianAddedEvent = new EventEmitter<string>();

  addNewMusician(name: string) {
    this.musicianAddedEvent.emit(name);
  }
}
