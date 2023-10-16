import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('xpto-queue')
export class QueueSeparateConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log(job.data);
    return {};
  }
}
