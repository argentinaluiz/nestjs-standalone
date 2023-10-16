import { Module } from '@nestjs/common';
import { QueueSeparateConsumer } from './queue-separate.consumer';
import { BullModule } from '@nestjs/bull';
import { QueueSeparateController } from './queue-separate.controller';

// @Module({
//   imports: [
//     BullModule.registerQueue({
//       name: 'xpto-queue',
//     }),
//   ],
//   providers: [QueueSeparateConsumer],
//   controllers: [QueueSeparateController],
// })
export class QueueSeparateModule {
  static register({ enableConsumers = true }) {
    return {
      module: QueueSeparateModule,
      imports: [
        BullModule.registerQueue({
          name: 'xpto-queue',
        }),
      ],
      providers: [...(enableConsumers ? [QueueSeparateConsumer] : [])],
      controllers: [QueueSeparateController],
    };
  }
}
