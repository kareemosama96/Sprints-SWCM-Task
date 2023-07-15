import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicianComponent } from './add-musician.component';

describe('AddMusicianComponent', () => {
  let component: AddMusicianComponent;
  let fixture: ComponentFixture<AddMusicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMusicianComponent]
    });
    fixture = TestBed.createComponent(AddMusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
