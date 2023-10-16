import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { GrpcServerModule } from './grpc-server/grpc-server.module';
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { MyRabbitmqModule } from './my-rabbitmq/my-rabbitmq.module';
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
    MyRabbitmqModule,
    XptoModule,
    QueueSeparateModule.register({ enableConsumers: false }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
