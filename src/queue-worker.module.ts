import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { GrpcServerModule } from './grpc-server/grpc-server.module';
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { XptoModule } from './xpto/xpto.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { QueueSeparateModule } from './queue-separate/queue-separate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    RestModule,
    GrpcServerModule,
    KafkaConsumerModule,
    XptoModule,
    QueueSeparateModule.register({ enableConsumers: true }),
  ],
})
export class QueueWorkerModule {}
