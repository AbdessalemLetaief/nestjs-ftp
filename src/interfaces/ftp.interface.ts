import { ModuleMetadata } from '@nestjs/common/interfaces';
import { IConnectionOptions } from './connection-options.interface';

export interface IFtpConnectionOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => Promise<IConnectionOptions> | IConnectionOptions;
  inject?: any[];
}
