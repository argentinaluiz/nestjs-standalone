import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsGrpcServer } from './products-grpc-server';
import { ProductsKafkaConsumer } from './products-kafka.consumer';
import { ProductsRabbitMqConsumer } from './products-rabbitmq.consumer';
import { BullModule } from '@nestjs/bull';
import { ProductsQueueConsumer } from './products-queue.consumer';

// @Module({
//   imports: [
//     BullModule.registerQueue({
//       name: 'xpto-queue',
//     }),
//   ],
//   controllers: [ProductsController, ProductsGrpcServer, ProductsKafkaConsumer],
//   providers: [ProductsService, ProductsRabbitMqConsumer, ProductsQueueConsumer],
// })
export class ProductsModule {
  static register({ enableQueueConsumers = false }) {
    return {
      module: ProductsModule,
      imports: [
        BullModule.registerQueue({
          name: 'xpto-queue',
        }),
      ],
      providers: [
        ProductsService,
        ProductsRabbitMqConsumer,
        ...(enableQueueConsumers ? [ProductsQueueConsumer] : []),
      ],
      controllers: [
        ProductsController,
        ProductsGrpcServer,
        ProductsKafkaConsumer,
      ],
    };
  }
}
