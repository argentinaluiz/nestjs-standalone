import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller, Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRabbitMqConsumer {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'test',
    queue: 'nest-queue',
  })
  async consumer(msg: any) {
    console.log(msg);
  }
}
