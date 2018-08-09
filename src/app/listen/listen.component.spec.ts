import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { ListenComponent } from './listen.component';
import { VowelsComponent } from '../vowels/vowels.component';
import { ConsonantsComponent } from '../consonants/consonants.component';

describe('ListenComponent', () => {
  let component: ListenComponent;
  let fixture: ComponentFixture<ListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListenComponent,
        VowelsComponent,
        ConsonantsComponent,
        EscapeHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
