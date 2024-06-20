import { Test, TestingModule } from '@nestjs/testing';
import { SeparacionCanchaResolver } from './separacion-cancha.resolver';
import { SeparacionCanchaService } from './separacion-cancha.service';

describe('SeparacionCanchaResolver', () => {
  let resolver: SeparacionCanchaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeparacionCanchaResolver, SeparacionCanchaService],
    }).compile();

    resolver = module.get<SeparacionCanchaResolver>(SeparacionCanchaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
