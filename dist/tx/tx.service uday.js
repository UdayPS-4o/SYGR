const fs= require('fs');

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
const axios_1 = __importDefault(require("axios"));
const schedule_1 = require("@nestjs/schedule");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const config_1 = require("./utils/config");

// let apis = ["BNN5APEPGCIP8XUG57KSKYZ2JN2HR37JV6","MZUTXCWZVJ7RJUH7AQZUKKF89US1VYX87Q","UQZB1F1R15ZBRG3Z5VIN2BIY8RBZF3Y44E","X4GP5G73ADT8FRK7R4KJPVFMKQRC7SPSPI","JZJKIDIC5YTG1XJ5VV6IZH624A41BY6V8B","6ZTTFYB3XNJG895RSAM91HZ6X9W24Q614Y","8GHIJ9GDX75SRXR1MCYEZ66ZE319FGYZ5Q"];
// rotate the api key and give next
let apis = [
    // "BNN5APEPGCIP8XUG57KSKYZ2JN2HR37JV6"
"8GHIJ9GDX75SRXR1MCYEZ66ZE319FGYZ5Q",
"6ZTTFYB3XNJG895RSAM91HZ6X9W24Q614Y"
]
function rotateApiKey() {
    let key = apis.shift();
    apis.push(key);
    return key;
}

// https://api.basescan.org/api?module=logs&action=getLogs&address=0x5f45cd59ba7f2f6bcd935663f68ee1debe3b8a10&fromBlock=1844947&toBlock=1845947&page=1&offset=1000&apikey=YourApiKeyToke


let TxService = class TxService {
    constructor() {
    }
    getCoinInfo(command, data) {
        const newCommand = command.split('0x')[1];
        for (let i = 0; i < newCommand.length; i += 2) {
            const tCommand = `0x${newCommand[i]}${newCommand[i + 1]}`;
            let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
            if (tCommand == "0x08") {
                console.log(`swap amount is ${res[1]}, contract address is ${res[3][0]}`);
                return {
                    address: res[3][0],
                    amount: res[1]
                };
            }
            if (tCommand == "0x09") {
                console.log(`swap amount is ${res[2]}, contract address is ${res[3][0]}`);
                return {
                    address: res[3][0],
                    amount: res[2]
                };
            }
            if (tCommand == "0x00") {
                console.log(`swap amount is ${res[1]}, contract address is ${res[3].slice(0, 42)}`);
                return {
                    address: res[3].slice(0, 42),
                    amount: res[1]
                };
            }
            if (tCommand == "0x01") {
                console.log(`swap amount is ${res[2]}, contract address is 0x${res[3].slice(-40)}`);
                return {
                    address: `0x${res[3].slice(-40)}`,
                    amount: res[2]
                };
            }
        }
    }
    changeEtherAmt(command, data, amt, percent) {
        const newCommand = command.split('0x')[1];
        const retData = [];
        for (let i = 0; i < newCommand.length; i += 2) {
            const tCommand = `0x${newCommand[i]}${newCommand[i + 1]}`;
            if (tCommand == "0x0b") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt]));
                continue;
            }
            if (tCommand == "0x09") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1].div(percent), amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x08") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].div(percent), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x00") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].div(percent), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x05") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].div(percent)]));
                continue;
            }
            if (tCommand == "0x04") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].div(percent)]));
                continue;
            }
            retData.push(data[i / 2]);
        }
        return retData;
    }
    changeTradeAmt(command, data, balance, tAmt, tBalance) {
        const newCommand = command.split('0x')[1];
        const retData = [];
        const amt = (balance.mul(tAmt)).div(tBalance);
        console.log(balance, tAmt, tBalance, amt);
        for (let i = 0; i < newCommand.length; i += 2) {
            const tCommand = `0x${newCommand[i]}${newCommand[i + 1]}`;
            if (tCommand == "0x08") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].mul(amt).div(tAmt), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x09") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1].mul(amt).div(tAmt), amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x00") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].mul(amt).div(tAmt), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x01") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x05") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].mul(amt).div(tAmt)]));
                continue;
            }
            if (tCommand == "0x04") {
                let res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].mul(amt).div(tAmt)]));
                continue;
            }
            retData.push(data[i / 2]);
        }
        return retData;
    }
    async getAll() {
        try {
            const data = await fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'));
            let db = JSON.parse(data.toString());
            return db;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getUser(userId) {
        try {
            const data = await fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'));
            let db = JSON.parse(data.toString());
            const userInfo = db.filter(item => item.userId == userId);
            return userInfo;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createUser(userId, inputs) {
        try {
            const data = await fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'));
            let db = JSON.parse(data.toString());
            const newInputs = [];
            for (let i = 0; i < inputs.length; i++) {
                const startBlockNumber = await this.getCurrentBlockNumber(config_1.chainIdToApi[inputs[i].chainId], rotateApiKey());
                newInputs.push({ ...inputs[i], startBlockNumber });
            }
            const newUser = {
                userId,
                inputs: newInputs,
                txs: []
            };
            db.push(newUser);
            await fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(db));
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async updateAll(newDB) {
        try {
            await fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB));
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async updateTx(userId, tx) {
        try {
            const data = await fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'));
            let db = JSON.parse(data.toString());
            const newDB = db.map(item => item.userId != userId ? item : { ...item, txs: [...item.txs, tx] });
            await fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB));
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteUser(userId) {
        try {
            const data = await fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'));
            let db = JSON.parse(data.toString());
            const newDB = db.filter(item => item.userId != userId);
            await fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB));
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async approve(chainId, walletPK, targetAddr, permitAddr, address) {
        const jsonProvider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.chainIdToRPC[chainId]);
        const signer = new ethers_1.ethers.Wallet(walletPK, jsonProvider);
        let erc20, balance, targetBalance;
        try {
            erc20 = new ethers_1.ethers.Contract(address, config_1.ERC20_ABI, signer);
            console.log(`approve func`);
            const allowance = await erc20.allowance(signer.address, permitAddr);
            console.log(allowance, erc20.address);
            balance = await erc20.balanceOf(signer.address);
            console.log(balance, signer.address);
            targetBalance = await erc20.balanceOf(targetAddr);
            // console.log(targetBalance, targetAddr);
            console.log({
                "targetBalance": targetBalance.toString(),
                "balance": balance.toString(),
            })
            if (allowance < ethers_1.ethers.utils.parseEther("100000")) {
                const tx = await erc20.approve(permitAddr, ethers_1.ethers.utils.parseEther("999999"), { gasLimit: 200000 });
                console.log(tx);
                return { success: true, balance, targetBalance };
            }
        }
        catch (error) {
            console.log(error);
        }
        return { success: false, balance, targetBalance };
    }
    async ExecutionTx(userId, walletPK, targetAddr, chainId, methodName, params, value, gas) {
        const jsonProvider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.chainIdToRPC[chainId]);
        const signer = new ethers_1.ethers.Wallet(walletPK, jsonProvider);
        const router = new ethers_1.ethers.Contract(config_1.chainIdToRouter[chainId], config_1.UNISWAP_UNIVERSAL_ROUTER_ABI, signer);
        let approveTxFlag = false;
        let percent;
        let tAmt, cBalance, tBalance;
        value = ethers_1.ethers.BigNumber.from(value);
        if (value.eq(ethers_1.ethers.utils.parseEther("0"))) {
            const { address, amount } = this.getCoinInfo(params[0], params[1]);
            const { success, balance, targetBalance } = await this.approve(chainId, walletPK, targetAddr, "0x000000000022D473030F116dDEE9F6B43aC78BA3", address);
            approveTxFlag = success;
            tAmt = amount;
            cBalance = balance;
            tBalance = targetBalance.add(amount);
        }
        const contractMethod = params.length == 3 ? router['execute(bytes,bytes[],uint256)'] : router['execute(bytes,bytes[])'];
        if (contractMethod) {
            try {
                let nonce = await jsonProvider.getTransactionCount(signer.address);
                nonce = approveTxFlag ? nonce + 1 : nonce;
                console.log(nonce);
                let newParams = params;
                let newValue = value;
                if (value.gt(ethers_1.ethers.utils.parseEther("0"))) {
                    const USDPriceInfo = await axios_1.default.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
                    let temp = parseFloat(ethers_1.ethers.utils.formatEther(value)) * USDPriceInfo.data.USD;
                    if (temp < 500) {
                        percent = ethers_1.ethers.BigNumber.from('20');
                        newValue = value.div(percent);
                    }
                    else {
                        if (temp < 5000) {
                            percent = ethers_1.ethers.BigNumber.from('10');
                            newValue = value.div(percent);
                        }
                        else {
                            percent = ethers_1.ethers.BigNumber.from('5');
                            newValue = value.div(percent);
                        }
                    }
                    let firstP = this.changeEtherAmt(params[0], params[1], newValue, percent);
                    newParams = params.map((item, index) => index == 1 ? firstP : item);
                }
                else {
                    let firstP = this.changeTradeAmt(params[0], params[1], cBalance, tAmt, tBalance);
                    newParams = params.map((item, index) => index == 1 ? firstP : item);
                }
                const tx = await contractMethod(...newParams, { value: newValue, gasLimit: 500000, nonce });
                console.log(tx);
                const currentBlock = await jsonProvider.getBlockNumber();
                const blockTimestamp = (await jsonProvider.getBlock(currentBlock)).timestamp;
                return { txid: tx.hash, from: signer.address, to: router.address, methodName, amount: newValue, chainId: chainId, timestamp: blockTimestamp };
            }
            catch (error) {
                console.log(error);
                return '';
            }
        }
    }
    async getTransactionWithTimeout(socketProvider, txHash, timeoutInMs) {
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`Timeout of ${timeoutInMs}ms exceeded`));
            }, timeoutInMs);
        });
        try {
            const transaction = await Promise.race([
                socketProvider.getTransaction(txHash),
                timeoutPromise
            ]);
            return transaction;
        }
        catch (error) {
            if (error.message.includes('Timeout')) {
                console.warn('Transaction lookup timed out.');
                return null;
            }
            else {
                console.error('Error fetching transaction:', error);
                throw error;
            }
        }
    }
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async getCurrentBlockNumber(api, apiKey) {
        try {
            const response = await axios_1.default.get(`${api}?module=proxy&action=eth_blockNumber&apikey=${apiKey}`);
            const data = response.data;
            if (data.result) {
                const blockNumber = parseInt(data.result, 16);
                return blockNumber;
            }
            else {
                console.error(`Error: ${data.message}`);
            }
        }
        catch (error) {
            console.error(`HTTP Error: ${error.message}`);
        }
    }
    async runNewSwapTx(userId, socketProvider, jsonProvider, walletPK, targetAddr, chainId) {
        socketProvider.on('block', async (blockNumber) => {
            console.log(blockNumber);
            const block = await socketProvider.getBlock(blockNumber);
            for (let i = 0; i < block.transactions.length; i++) {
                const item = block.transactions[i];
            }
        });
    }
    async handleCron() {
        const db = await this.getAll();
        const newDB = [];
        for (let i = 0; i < db.length; i++) {
            const { inputs, userId, txs } = db[i];
            const newInputs = [];
            for (let j = 0; j < inputs.length; j++) {
                const { chainId, walletPK, targetAddr, startBlockNumber } = inputs[j];
                const url = `${config_1.chainIdToApi[chainId]}?module=account&action=txlist&address=${targetAddr}&startblock=${startBlockNumber}&endblock=99999999&sort=asc&apikey=${rotateApiKey()}`;
                const result = await (await axios_1.default.get(url)).data;
                console.log(result);
                fs.appendFileSync('log.txt', JSON.stringify(result) + '\n');
                let newBlockNumber = startBlockNumber;
                if (result.status == 1) {
                    for (let k = 0; k < result.result.length; k++) {
                        const tx = result.result[k];
                        if (tx.to?.toLowerCase() === config_1.chainIdToRouter[chainId].toLowerCase()) {
                            const iface = new ethers_1.ethers.utils.Interface(config_1.UNISWAP_UNIVERSAL_ROUTER_ABI);
                            const fragment = iface.parseTransaction({ data: tx.input });
                            const runTx = await this.ExecutionTx(userId, walletPK, targetAddr, chainId, fragment.name, fragment.args, tx.value, tx.gas);
                            if (runTx)
                                txs.push(runTx);
                            newBlockNumber = parseInt(tx.blockNumber) + 1;
                        }
                    }
                }
                newInputs.push({ chainId, walletPK, targetAddr, startBlockNumber: newBlockNumber });
            }
            newDB.push({ userId, inputs: newInputs, txs });
        }
        await this.updateAll(newDB);
    }
    async startTrade(runTxDto) {
        const userInfo = await this.createUser(runTxDto.userId, runTxDto.inputs);
    }
    async stopTrade(stopTxDto) {
        const userInfo = await this.deleteUser(stopTxDto.userId);
    }
};
exports.TxService = TxService;
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TxService.prototype, "handleCron", null);
exports.TxService = TxService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TxService);
//# sourceMappingURL=tx.service.js.map



let test = new TxService();
//getCoinInfo
let tx = {
    "blockNumber": "17597714",
    "blockHash": "0x0b29c27b96454c8d3dc484b5e6e366f67fb1a862125aa0c466dc490b1974aadb",
    "timeStamp": "1721984775",
    "hash": "0xa6bcc7ad11605461176b9b736d1f182314001f1d26963db086175d0b29e355f4",
    "nonce": "68",
    "transactionIndex": "56",
    "from": "0x527d1560930735ae5adb2f867b29502ada2bc9f0",
    "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
    "value": "0",
    "gas": "281580",
    "gasPrice": "3756952",
    "input": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000066a3682b000000000000000000000000000000000000000000000000000000000000000308060400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000186a000000000000000000000000000000000000000000000001e9ef2f7cc8a86917000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda0291300000000000000000000000042000000000000000000000000000000000000060000000000000000000000004cf3f6a5d0b9ce2dbeb4571a808e486ee5e4a96300000000000000000000000000000000000000000000000000000000000000600000000000000000000000004cf3f6a5d0b9ce2dbeb4571a808e486ee5e4a9630000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d493091000000000000000000000000000000000000000000000000000000000000001900000000000000000000000000000000000000000000000000000000000000600000000000000000000000004cf3f6a5d0b9ce2dbeb4571a808e486ee5e4a963000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000001e8b5a0a612656df27",
    "methodId": "0x3593564c",
    "functionName": "execute(bytes commands,bytes[] inputs,uint256 deadline)",
    "contractAddress": "",
    "cumulativeGasUsed": "10151156",
    "txreceipt_status": "1",
    "gasUsed": "202495",
    "confirmations": "2676",
    "isError": "0"
}

const iface = new ethers_1.ethers.utils.Interface(config_1.UNISWAP_UNIVERSAL_ROUTER_ABI);
const fragment = iface.parseTransaction({ data: tx.input });
console.log("fragment", JSON.stringify(fragment));