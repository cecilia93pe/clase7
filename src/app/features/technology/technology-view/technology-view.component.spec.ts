import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyViewComponent } from './technology-view.component';

describe('TechnologyViewComponent', () => {
  let component: TechnologyViewComponent;
  let fixture: ComponentFixture<TechnologyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
