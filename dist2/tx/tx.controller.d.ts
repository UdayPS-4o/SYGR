import { TxService } from './tx.service';
import { RunTxDto, StopTxDto, UserInfo } from './dto/run-tx.dto';
export declare class TxController {
    private readonly txService;
    constructor(txService: TxService);
    startTrade(runTxDto: RunTxDto): Promise<void>;
    stopTrade(stopTxDto: StopTxDto): Promise<void>;
    getUser(userInfo: UserInfo): Promise<any>;
}
