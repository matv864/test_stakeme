import { Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("block/:height")
  async blocInfokByHeight(@Param() params: any) {
    console.log("block");
    return await this.appService.getBlockByNumber(params.height);
  }


  @Get("transactions/:hash")
  async transactionIfoByHash(@Param() params: any) {
    console.log("transactions");
    return await this.appService.getTransactionByHash(params.hash);
  }

}
