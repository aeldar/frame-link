import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameLinkComponent } from './frame-link.component';

describe('FrameLinkComponent', () => {
  let component: FrameLinkComponent;
  let fixture: ComponentFixture<FrameLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
