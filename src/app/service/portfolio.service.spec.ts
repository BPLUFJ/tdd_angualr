import { TestBed } from '@angular/core/testing';

import { portfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: portfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(portfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
