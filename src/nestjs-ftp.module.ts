import { DynamicModule, Module } from '@nestjs/common';
import {
  CLIENT_CONNECTION_OPTIONS,
  CONFIG_CONNECTION_OPTIONS,
} from './constants';
import { FtpService } from './ftp.service';
import { IClientOptions } from './interfaces/client-options.interface';
import { IFtpConnectionOptions } from './interfaces/ftp.interface';

@Module({})
export class FtpModule {
  static forRootFtpAsync(
    options: IFtpConnectionOptions,
    clientOptions?: IClientOptions,
  ): DynamicModule {
    return {
      module: FtpModule,
      imports: options.imports || [],
      providers: [
        {
          provide: CONFIG_CONNECTION_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        {
          provide: CLIENT_CONNECTION_OPTIONS,
          useValue: clientOptions || { timeout: 30000 },
        },
        FtpService,
      ],
      exports: [FtpService],
    };
  }
}
