import { Module } from '@nestjs/common';
import { XptoService } from './xpto.service';

@Module({
  providers: [XptoService]
})
export class XptoModule {}
