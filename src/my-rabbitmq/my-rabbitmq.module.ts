import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // RabbitMQModule.forRoot(RabbitMQModule, {
    //   uri: 'amqp://admin:admin@rabbitmq:5672',
    //   registerHandlers: false
    // }),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (configService: ConfigService) => ({
        uri: 'amqp://admin:admin@rabbitmq:5672',
        registerHandlers:
          configService.get('RABBITMQ_ENABLE_HANDLERS') === 'true',
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [RabbitMQModule],
})
export class MyRabbitmqModule {}
