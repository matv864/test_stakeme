import { Injectable } from '@nestjs/common';

import { getBlockByNumberFromNode, getTransactionByHashFromNode } from './externalRequest';

@Injectable()
export class AppService {
  async getBlockByNumber(number: string) {
    return await getBlockByNumberFromNode(number);
    
  }

  async getTransactionByHash(hash: string) {
    return await getTransactionByHashFromNode(hash);
  }
}
