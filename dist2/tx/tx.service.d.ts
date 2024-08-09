import { BigNumber, ethers } from 'ethers';
import { RunTxDto, StopTxDto } from './dto/run-tx.dto';
export declare class TxService {
    constructor();
    allow(chainId: 1 | 11155111 | 8453 | 84531, walletPK: string, tokenAddress: string, routerAddress: string, amount: BigNumber): Promise<void>;
    getCoinInfo(command: string, data: string[]): {
        address: string;
        amount: BigNumber;
    };
    changeEtherAmt(command: string, data: string[], amt: BigNumber, percent: BigNumber): string[];
    changeTradeAmt(command: string, data: string[], balance: BigNumber, tAmt: BigNumber, tBalance: BigNumber): string[];
    getAll(): Promise<any>;
    getUser(userId: string): Promise<any>;
    createUser(userId: string, inputs: any[]): Promise<boolean>;
    updateAll(newDB: any): Promise<boolean>;
    updateTx(userId: string, tx: any): Promise<boolean>;
    deleteUser(userId: string): Promise<boolean>;
    approve(chainId: 1 | 11155111 | 8453 | 84531, walletPK: string, targetAddr: string, permitAddr: string, address: string): Promise<{
        success: boolean;
        balance: BigNumber;
        targetBalance: BigNumber;
    }>;
    ExecutionTx(userId: string, walletPK: string, targetAddr: string, chainId: 1 | 11155111 | 8453 | 84531, methodName: string, params: any, value: any, gas: any): Promise<"" | {
        txid: any;
        from: string;
        to: string;
        methodName: string;
        amount: any;
        chainId: 1 | 11155111 | 8453 | 84531;
        timestamp: number;
    }>;
    getTransactionWithTimeout(socketProvider: any, txHash: any, timeoutInMs: any): Promise<any>;
    sleep(ms: any): Promise<unknown>;
    getCurrentBlockNumber(api: string, apiKey: string): Promise<number>;
    runNewSwapTx(userId: string, socketProvider: ethers.providers.WebSocketProvider, jsonProvider: ethers.providers.JsonRpcProvider, walletPK: string, targetAddr: string, chainId: 1 | 11155111 | 8453 | 84531): Promise<void>;
    handleCron(): Promise<void>;
    startTrade(runTxDto: RunTxDto): Promise<void>;
    stopTrade(stopTxDto: StopTxDto): Promise<void>;
}
