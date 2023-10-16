import { InjectQueue } from '@nestjs/bull';
import { Body, Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('queue-separate')
export class QueueSeparateController {
  constructor(@InjectQueue('xpto-queue') private testQueue: Queue) {}

  @Post()
  async create(@Body() body) {
    await this.testQueue.add(body);
  }
}
