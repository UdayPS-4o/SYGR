export declare class RunTxDto {
    userId: string;
    inputs: [
        {
            chainId: number;
            walletPK: string;
            targetAddr: string;
        }
    ];
}
export declare class StopTxDto {
    userId: string;
}
export declare class UserInfo {
    userId: string;
}
