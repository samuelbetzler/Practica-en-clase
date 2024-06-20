import { Test, TestingModule } from '@nestjs/testing';
import { CanchaResolver } from './cancha.resolver';
import { CanchaService } from './cancha.service';

describe('CanchaResolver', () => {
  let resolver: CanchaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanchaResolver, CanchaService],
    }).compile();

    resolver = module.get<CanchaResolver>(CanchaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
