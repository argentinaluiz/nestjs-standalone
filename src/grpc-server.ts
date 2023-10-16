import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { RestController } from './rest/rest.controller';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'fullcycle_package',
      protoPath: join(__dirname, 'grpc-server/grpc.proto'),
      url: '0.0.0.0:50051',
    },
  });

  //console.log(app.get(RestController))

  await app.listen();
}
bootstrap();
