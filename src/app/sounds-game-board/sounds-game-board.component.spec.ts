import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsGameBoardComponent } from './sounds-game-board.component';

describe('SoundsGameBoardComponent', () => {
  let component: SoundsGameBoardComponent;
  let fixture: ComponentFixture<SoundsGameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsGameBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
