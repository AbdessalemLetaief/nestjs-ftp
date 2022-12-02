import { ConnectionOptions as TLSConnectionOptions } from "tls";


export interface IConnectionOptions {
    /** Host the client should connect to. Optional, default is "localhost". */
    readonly host?: string;
    /** Port the client should connect to. Optional, default is 21. */
    readonly port?: number;
    /** Username to use for login. Optional, default is "anonymous". */
    readonly user?: string;
    /** Password to use for login. Optional, default is "guest". */
    readonly password?: string;
    /** Use FTPS over TLS. Optional, default is false. True is preferred explicit TLS, "implicit" supports legacy, non-standardized implicit TLS. */
    readonly secure?: boolean | "implicit";
    /** TLS options as in [tls.connect(options)](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback), optional. */
    readonly secureOptions?: TLSConnectionOptions;
}
