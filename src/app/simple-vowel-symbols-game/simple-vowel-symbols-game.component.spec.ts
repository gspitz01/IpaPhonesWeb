import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleVowelSymbolsGameComponent } from './simple-vowel-symbols-game.component';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';

describe('SimpleVowelSymbolsGameComponent', () => {
  let component: SimpleVowelSymbolsGameComponent;
  let fixture: ComponentFixture<SimpleVowelSymbolsGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SimpleVowelSymbolsGameComponent,
        EscapeHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleVowelSymbolsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
