import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'fullcycle_package',
      protoPath: join(__dirname, '..', 'products/grpc.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
}
bootstrap();
