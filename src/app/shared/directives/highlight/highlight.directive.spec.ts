import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let element:ElementRef = {} as ElementRef;
    const directive = new HighlightDirective( element );
    expect(directive).toBeTruthy();
  });
});
