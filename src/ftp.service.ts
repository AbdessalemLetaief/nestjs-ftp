import { Inject, Injectable, Logger } from '@nestjs/common';
import { CONFIG_CONNECTION_OPTIONS } from './constants';
import * as Client from 'ftp'
import { IConnectionOptions } from './interfaces/ftp.interface';

@Injectable()
export class FtpService {
  private readonly _ftp: Client;
  constructor(
    @Inject(CONFIG_CONNECTION_OPTIONS) private _options: IConnectionOptions,
  ) {
    Logger.log('initialising FTP Module', 'FTP SERVICE');
    this._ftp= new Client(this._options)
  }

  async connect(){
    return this._ftp.connect()
  }

}
