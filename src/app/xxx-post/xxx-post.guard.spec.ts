import { TestBed } from '@angular/core/testing';

import { XxxPostGuard } from './xxx-post.guard';

describe('XxxPostGuard', () => {
  let guard: XxxPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(XxxPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
