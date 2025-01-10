import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserScoreComponent } from './update-user-score.component';

describe('UpdateUserScoreComponent', () => {
  let component: UpdateUserScoreComponent;
  let fixture: ComponentFixture<UpdateUserScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
