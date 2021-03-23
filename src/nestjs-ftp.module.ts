import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_CONNECTION_OPTIONS } from './constants';
import { FtpService } from './ftp.service';
import { IFtpConnectionOptions } from './interfaces/ftp.interface';

@Module({})
export class FtpModule {

  static forRootFtpAsync(options: IFtpConnectionOptions): DynamicModule {
    return {
        module: FtpModule,
        providers: [
            {
                provide: CONFIG_CONNECTION_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            },
            FtpService
        ],
        exports: [FtpService],
    };
}
}
