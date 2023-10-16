import { Test, TestingModule } from '@nestjs/testing';
import { XptoService } from './xpto.service';

describe('XptoService', () => {
  let service: XptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XptoService],
    }).compile();

    service = module.get<XptoService>(XptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
