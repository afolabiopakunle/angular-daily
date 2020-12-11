import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingPlacesComponent } from './going-places.component';

describe('GoingPlacesComponent', () => {
  let component: GoingPlacesComponent;
  let fixture: ComponentFixture<GoingPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoingPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
