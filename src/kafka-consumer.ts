import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'fullcycle',
        brokers: ['kafka:29092'],
      },
      consumer: {
        groupId: 'fullcycle-consumer',
      },
    },
  });

  await app.listen();
}
bootstrap();
