import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusiciansComponent } from './list-musicians.component';

describe('ListMusiciansComponent', () => {
  let component: ListMusiciansComponent;
  let fixture: ComponentFixture<ListMusiciansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMusiciansComponent]
    });
    fixture = TestBed.createComponent(ListMusiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
