import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { VowelsComponent } from './vowels.component';

describe('VowelsComponent', () => {
  let component: VowelsComponent;
  let fixture: ComponentFixture<VowelsComponent>;
  let ipaCharListItem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VowelsComponent,
        EscapeHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ipaCharListItem = fixture.debugElement.query(By.css("span.vowel"));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("mouseenter emits vowelEntered event", () => {
    spyOn(component.vowelEntered, 'emit');
    let enterEvent = new Event('mouseenter');
    ipaCharListItem.nativeElement.dispatchEvent(enterEvent);
    expect(component.vowelEntered.emit).toHaveBeenCalled();
  });
  
  it("mouseleave emits vowelLeft event", () => {
    spyOn(component.vowelLeft, 'emit');
    let leaveEvent = new Event('mouseleave');
    ipaCharListItem.nativeElement.dispatchEvent(leaveEvent);
    expect(component.vowelLeft.emit).toHaveBeenCalled();
  });
  
  it("click ipa char element emits vowelClicked event", () => {
    spyOn(component.vowelClicked, 'emit');
    ipaCharListItem.nativeElement.click();
    expect(component.vowelClicked.emit).toHaveBeenCalled();
  });
});
