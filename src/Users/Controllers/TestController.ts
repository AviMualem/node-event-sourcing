import { Get, Controller } from '@nestjs/common';
import { AppService } from '../../app.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('Test')
@ApiUseTags('test')
export class TestController
 {
  // constructor() {}
  @Get('/')
  async SayHelloAsync(): Promise<string> {
    return 'ok';
  }
}
