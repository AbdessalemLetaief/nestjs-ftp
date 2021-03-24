<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">A NESTJS MODULE FOR FTP </h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
    <img src="https://badge.fury.io/js/%40nestjsplus%2Fmassive.svg" alt="npm version" height="18">    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation
##### Installation missing dependencies (aws_sdk , nodeMailer)
> npm install nestjs-ftp

### About nestjs-ftp

This is an FTP client for NestJs, it supports FTPS over TLS, Passive Mode over IPv6, has a Promise-based API, and offers methods to operate on whole directories built on top of basic-ftp



### Quick Start

Nestjs-ftp is build using the NestJs Dynamic modules and Factory providers approach, to configure it import the `FtpModule` module and the `forRootFtpAsync` service.


For example, your `AppModule` should look like this :

```typescript

import { Module } from '@nestjs/common';



@Module({
    imports: [
        FtpModule.forRootFtpAsync({
            useFactory : async ()=>{
                return {
                  host:"test.rebex.net",
                  password:"password",
                  port:21,
                  user:"demo",
                  secure:true
                }
            },
            inject: [ConfigService]
        })
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule { }
```
Then just inject the service just like any local service

For Example:

```typescript
import { Injectable } from '@nestjs/common';
import { FtpService } from 'nestjs-ftp';

@Injectable()
export class AppService {
    constructor(private readonly _ftpService: FtpService){}

    async uploadFile(): string {
        try {
            await this._ftpService.upload(source,destination)
        } catch (error) {
            throw new Error(error)
        }
    }
}

```

### Author

**ABDESSALEM LETAIEF**

### License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
