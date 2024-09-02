import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsZoneComponent } from './cards-zone.component';

describe('CardsZoneComponent', () => {
  let component: CardsZoneComponent;
  let fixture: ComponentFixture<CardsZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
