import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { EscapeHtmlPipe } from './keep-html.pipe';

describe("Pipe: EscapeHtml", () => {
  let pipe: EscapeHtmlPipe;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EscapeHtmlPipe
      ]
    });
  });
  
  beforeEach(inject([EscapeHtmlPipe], p => {
    pipe = p;
  }));
  
  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });
});