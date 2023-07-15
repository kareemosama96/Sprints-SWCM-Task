import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianDetailsComponent } from './musician-details.component';

describe('MusicianDetailsComponent', () => {
  let component: MusicianDetailsComponent;
  let fixture: ComponentFixture<MusicianDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicianDetailsComponent]
    });
    fixture = TestBed.createComponent(MusicianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
