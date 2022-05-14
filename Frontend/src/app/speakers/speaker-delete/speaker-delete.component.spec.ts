import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDeleteComponent } from './speaker-delete.component';

describe('SpeakerDeleteComponent', () => {
  let component: SpeakerDeleteComponent;
  let fixture: ComponentFixture<SpeakerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
