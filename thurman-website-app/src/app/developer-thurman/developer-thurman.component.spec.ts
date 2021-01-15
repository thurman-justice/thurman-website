import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperThurmanComponent } from './developer-thurman.component';

describe('DeveloperThurmanComponent', () => {
  let component: DeveloperThurmanComponent;
  let fixture: ComponentFixture<DeveloperThurmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperThurmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperThurmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
