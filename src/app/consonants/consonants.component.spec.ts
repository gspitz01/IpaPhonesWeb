import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { ConsonantsComponent } from './consonants.component';

describe('ConsonantsComponent', () => {
  let component: ConsonantsComponent;
  let fixture: ComponentFixture<ConsonantsComponent>;
  let startRoundButton: DebugElement;
  let ipaCharListItem: DebugElement;
  let hintArea: DebugElement;
  let messagesArea; DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConsonantsComponent,
        EscapeHtmlPipe
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsonantsComponent);
    component = fixture.componentInstance;
    hintArea = fixture.debugElement.query(By.css(".hint"));
    fixture.detectChanges();
    ipaCharListItem = fixture.debugElement.query(By.css("li.consonant"));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("mouseenter ipa char element emits consonantEntered event", () => {
    spyOn(component.consonantEntered, 'emit');
    let enterEvent = new Event('mouseenter');
    ipaCharListItem.nativeElement.dispatchEvent(enterEvent);
    expect(component.consonantEntered.emit).toHaveBeenCalled();
  });
  
  it("mouseleave ipa char element emits consonantLeft event", () => {
    spyOn(component.consonantLeft, 'emit');
    let leaveEvent = new Event('mouseleave');
    ipaCharListItem.nativeElement.dispatchEvent(leaveEvent);
    expect(component.consonantLeft.emit).toHaveBeenCalled();
  });
  
  it("click ipa char element emits consonantClicked event", () => {
    spyOn(component.consonantClicked, 'emit');
    ipaCharListItem.nativeElement.click();
    expect(component.consonantClicked.emit).toHaveBeenCalled();
  });
});
