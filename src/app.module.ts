import { Module } from '@nestjs/common';
import { MyRabbitmqModule } from './my-rabbitmq/my-rabbitmq.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { ProductsModule } from './products/products.module';

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
    MyRabbitmqModule,
    ProductsModule.register({ enableQueueConsumers: false }),
    //ProductsModule,
  ],
})
export class AppModule {}
