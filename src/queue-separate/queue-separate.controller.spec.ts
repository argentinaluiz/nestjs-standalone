import { Test, TestingModule } from '@nestjs/testing';
import { QueueSeparateController } from './queue-separate.controller';

describe('QueueSeparateController', () => {
  let controller: QueueSeparateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueSeparateController],
    }).compile();

    controller = module.get<QueueSeparateController>(QueueSeparateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
