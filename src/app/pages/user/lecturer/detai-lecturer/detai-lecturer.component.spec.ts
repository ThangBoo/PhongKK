import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiLecturerComponent } from './detai-lecturer.component';

describe('DetaiLecturerComponent', () => {
  let component: DetaiLecturerComponent;
  let fixture: ComponentFixture<DetaiLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaiLecturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaiLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
