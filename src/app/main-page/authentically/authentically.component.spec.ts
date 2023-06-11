import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticallyComponent } from './authentically.component';

describe('AuthenticallyComponent', () => {
  let component: AuthenticallyComponent;
  let fixture: ComponentFixture<AuthenticallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
