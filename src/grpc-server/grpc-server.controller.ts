import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class GrpcServerController {
  @GrpcMethod('GrpcService')
  find() {
    return { text: 'Hello World!' };
  }
}
