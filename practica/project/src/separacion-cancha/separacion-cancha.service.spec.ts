import { Test, TestingModule } from '@nestjs/testing';
import { SeparacionCanchaService } from './separacion-cancha.service';

describe('SeparacionCanchaService', () => {
  let service: SeparacionCanchaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeparacionCanchaService],
    }).compile();

    service = module.get<SeparacionCanchaService>(SeparacionCanchaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
