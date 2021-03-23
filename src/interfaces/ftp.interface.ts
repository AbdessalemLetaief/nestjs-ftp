import { ModuleMetadata } from "@nestjs/common";


export interface IFtpConnectionOptions extends Pick<ModuleMetadata, 'imports'>{
    useFactory: (...args: any[]) => Promise<IConnectionOptions>
    inject?: any[];
}

export interface IConnectionOptions {
    host : string;
    port : number
    user : string;
    password : string;
    secure : boolean;
    // secureOptions : ISecureOptions
    connTimeout : number;
    pasvTimeout : number;
    aliveTimeout : number;
}

export interface ISecureOptions {

}