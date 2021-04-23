import { Inject, Injectable, Logger } from '@nestjs/common';
import { CONFIG_CONNECTION_OPTIONS } from './constants';
import { Client, FileInfo, FTPResponse, UploadOptions } from 'basic-ftp';
import { Readable, Writable } from 'stream';
import { IConnectionOptions } from './interfaces/connection-options.interface';

@Injectable()
export class FtpService {
  private readonly _ftpClient: Client;
  constructor(
    @Inject(CONFIG_CONNECTION_OPTIONS) private _options: IConnectionOptions,
  ) {
    Logger.log('initialising FTP Module', 'FTP SERVICE');
    this._ftpClient = new Client();
  }

  /**
   * List files inside a certain directory
   * keep path empty to list the root folder of the ftp
   * @param path Path for the directory to list
   * @returns
   */
  async list(path?: string): Promise<FileInfo[]> {
    try {
      await this._ftpClient.access(this._options);
      return await this._ftpClient.list(path);
    } catch (err) {
      Logger.log(err);
    }
    this._ftpClient.close();
  }

  /**
   * Download file to path
   * @param destination Destination to save file to
   * @param fromRemotePath remote path in Ftp
   * @param startAt
   * @returns
   */
  async downloadTo(
    destination: Writable | string,
    fromRemotePath: string,
    startAt?: number,
  ): Promise<FTPResponse> {
    try {
      await this._ftpClient.access(this._options);
      return await this._ftpClient.downloadTo(
        destination,
        fromRemotePath,
        startAt,
      );
    } catch (err) {
      Logger.log(err);
    }
    this._ftpClient.close();
  }

  /**
   * upload a file or readable to ftp
   * @param source path to the file to upload or a readable file
   * @param toRemotePath path to save your file
   * @param options
   * @returns
   */
  async upload(
    source: Readable | string,
    toRemotePath: string,
    options?: UploadOptions,
  ): Promise<FTPResponse> {
    try {
      await this._ftpClient.access(this._options);
      return await this._ftpClient.uploadFrom(source, toRemotePath, options);
    } catch (err) {
      Logger.log(err);
    }
    this._ftpClient.close();
  }
}
