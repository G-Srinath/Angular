import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceReaderComponent } from './voice-reader.component';

describe('VoiceReaderComponent', () => {
  let component: VoiceReaderComponent;
  let fixture: ComponentFixture<VoiceReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoiceReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
