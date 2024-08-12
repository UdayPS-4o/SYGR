"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxService = void 0;
var common_1 = require("@nestjs/common");
var ethers_1 = require("ethers");
var axios_1 = __importDefault(require("axios"));
var schedule_1 = require("@nestjs/schedule");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var config_1 = require("./utils/config");
var Permit2_sdk_1 = require("@uniswap/permit2-sdk");
var TxService = (function () {
    function TxService() {
    }
    TxService.prototype.allow = function (chainId, walletPK, tokenAddress, routerAddress, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonProvider, signer, allowanceProvider, _a, permitAmount, expiration, nonce, permitSingle, _b, domain, types, values, signature, permitAbi, permitContract, nonceTx, res, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        jsonProvider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.chainIdToRPC[chainId]);
                        signer = new ethers_1.ethers.Wallet(walletPK, jsonProvider);
                        allowanceProvider = new Permit2_sdk_1.AllowanceProvider(jsonProvider, Permit2_sdk_1.PERMIT2_ADDRESS);
                        return [4, allowanceProvider.getAllowanceData(signer.address, tokenAddress, routerAddress)];
                    case 1:
                        _a = _c.sent(), permitAmount = _a.amount, expiration = _a.expiration, nonce = _a.nonce;
                        console.log(permitAmount, expiration, nonce);
                        if (permitAmount.gte(amount)) {
                            return [2];
                        }
                        permitSingle = {
                            details: {
                                token: tokenAddress,
                                amount: Permit2_sdk_1.MaxAllowanceTransferAmount,
                                expiration: Math.floor((Date.now() + 1000 * 60 * 60 * 24 * 30) / 1000),
                                nonce: nonce,
                            },
                            spender: routerAddress,
                            sigDeadline: Math.floor((Date.now() + 1000 * 60 * 60 * 30) / 1000),
                        };
                        _b = Permit2_sdk_1.AllowanceTransfer.getPermitData(permitSingle, Permit2_sdk_1.PERMIT2_ADDRESS, chainId), domain = _b.domain, types = _b.types, values = _b.values;
                        return [4, signer._signTypedData(domain, types, values)];
                    case 2:
                        signature = _c.sent();
                        console.log(signature);
                        permitAbi = [{ "inputs": [{ "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "AllowanceExpired", "type": "error" }, { "inputs": [], "name": "ExcessiveInvalidation", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "InsufficientAllowance", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "name": "InvalidAmount", "type": "error" }, { "inputs": [], "name": "InvalidContractSignature", "type": "error" }, { "inputs": [], "name": "InvalidNonce", "type": "error" }, { "inputs": [], "name": "InvalidSignature", "type": "error" }, { "inputs": [], "name": "InvalidSignatureLength", "type": "error" }, { "inputs": [], "name": "InvalidSigner", "type": "error" }, { "inputs": [], "name": "LengthMismatch", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "signatureDeadline", "type": "uint256" }], "name": "SignatureExpired", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint160", "name": "amount", "type": "uint160" }, { "indexed": false, "internalType": "uint48", "name": "expiration", "type": "uint48" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "address", "name": "spender", "type": "address" }], "name": "Lockdown", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint48", "name": "newNonce", "type": "uint48" }, { "indexed": false, "internalType": "uint48", "name": "oldNonce", "type": "uint48" }], "name": "NonceInvalidation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint160", "name": "amount", "type": "uint160" }, { "indexed": false, "internalType": "uint48", "name": "expiration", "type": "uint48" }, { "indexed": false, "internalType": "uint48", "name": "nonce", "type": "uint48" }], "name": "Permit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "word", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mask", "type": "uint256" }], "name": "UnorderedNonceInvalidation", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "uint48", "name": "expiration", "type": "uint48" }, { "internalType": "uint48", "name": "nonce", "type": "uint48" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "uint48", "name": "expiration", "type": "uint48" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint48", "name": "newNonce", "type": "uint48" }], "name": "invalidateNonces", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "wordPos", "type": "uint256" }, { "internalType": "uint256", "name": "mask", "type": "uint256" }], "name": "invalidateUnorderedNonces", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "internalType": "struct IAllowanceTransfer.TokenSpenderPair[]", "name": "approvals", "type": "tuple[]" }], "name": "lockdown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nonceBitmap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "uint48", "name": "expiration", "type": "uint48" }, { "internalType": "uint48", "name": "nonce", "type": "uint48" }], "internalType": "struct IAllowanceTransfer.PermitDetails[]", "name": "details", "type": "tuple[]" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "sigDeadline", "type": "uint256" }], "internalType": "struct IAllowanceTransfer.PermitBatch", "name": "permitBatch", "type": "tuple" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "uint48", "name": "expiration", "type": "uint48" }, { "internalType": "uint48", "name": "nonce", "type": "uint48" }], "internalType": "struct IAllowanceTransfer.PermitDetails", "name": "details", "type": "tuple" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "sigDeadline", "type": "uint256" }], "internalType": "struct IAllowanceTransfer.PermitSingle", "name": "permitSingle", "type": "tuple" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.TokenPermissions", "name": "permitted", "type": "tuple" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct ISignatureTransfer.PermitTransferFrom", "name": "permit", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.SignatureTransferDetails", "name": "transferDetails", "type": "tuple" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permitTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.TokenPermissions[]", "name": "permitted", "type": "tuple[]" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct ISignatureTransfer.PermitBatchTransferFrom", "name": "permit", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.SignatureTransferDetails[]", "name": "transferDetails", "type": "tuple[]" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permitTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.TokenPermissions", "name": "permitted", "type": "tuple" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct ISignatureTransfer.PermitTransferFrom", "name": "permit", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.SignatureTransferDetails", "name": "transferDetails", "type": "tuple" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes32", "name": "witness", "type": "bytes32" }, { "internalType": "string", "name": "witnessTypeString", "type": "string" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permitWitnessTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.TokenPermissions[]", "name": "permitted", "type": "tuple[]" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct ISignatureTransfer.PermitBatchTransferFrom", "name": "permit", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }], "internalType": "struct ISignatureTransfer.SignatureTransferDetails[]", "name": "transferDetails", "type": "tuple[]" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes32", "name": "witness", "type": "bytes32" }, { "internalType": "string", "name": "witnessTypeString", "type": "string" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permitWitnessTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "address", "name": "token", "type": "address" }], "internalType": "struct IAllowanceTransfer.AllowanceTransferDetails[]", "name": "transferDetails", "type": "tuple[]" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint160", "name": "amount", "type": "uint160" }, { "internalType": "address", "name": "token", "type": "address" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
                        permitContract = new ethers_1.ethers.Contract(Permit2_sdk_1.PERMIT2_ADDRESS, permitAbi, signer);
                        return [4, jsonProvider.getTransactionCount(signer.address)];
                    case 3:
                        nonceTx = (_c.sent()) + 1;
                        return [4, permitContract['permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'](signer.address, permitSingle, signature, { gasLimit: 200000, nonce: nonceTx })];
                    case 4:
                        res = _c.sent();
                        console.log(res);
                        return [3, 6];
                    case 5:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    TxService.prototype.getCoinInfo = function (command, data) {
        var newCommand = command.split('0x')[1];
        for (var i = 0; i < newCommand.length; i += 2) {
            var tCommand = "0x".concat(newCommand[i]).concat(newCommand[i + 1]);
            var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
            if (tCommand == "0x08") {
                console.log("swap amount is ".concat(res[1], ", contract address is ").concat(res[3][0]));
                return {
                    address: res[3][0],
                    amount: res[1]
                };
            }
            if (tCommand == "0x09") {
                console.log("swap amount is ".concat(res[2], ", contract address is ").concat(res[3][0]));
                return {
                    address: res[3][0],
                    amount: res[2]
                };
            }
            if (tCommand == "0x00") {
                console.log("swap amount is ".concat(res[1], ", contract address is ").concat(res[3].slice(0, 42)));
                return {
                    address: res[3].slice(0, 42),
                    amount: res[1]
                };
            }
            if (tCommand == "0x01") {
                console.log("swap amount is ".concat(res[2], ", contract address is 0x").concat(res[3].slice(-40)));
                return {
                    address: "0x".concat(res[3].slice(-40)),
                    amount: res[2]
                };
            }
        }
    };
    TxService.prototype.changeEtherAmt = function (command, data, amt, prevAmt, percent) {
        var newCommand = command.split('0x')[1];
        var retData = [];
        for (var i = 0; i < newCommand.length; i += 2) {
            var tCommand = "0x".concat(newCommand[i]).concat(newCommand[i + 1]);
            if (tCommand == "0x0b") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt]));
                continue;
            }
            if (tCommand == "0x09") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1].mul(amt).div(prevAmt), amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x08") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].div(percent), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x00") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].div(percent), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x05") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].div(percent)]));
                continue;
            }
            if (tCommand == "0x04") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].div(percent)]));
                continue;
            }
            retData.push(data[i / 2]);
        }
        return retData;
    };
    TxService.prototype.changeTradeAmt = function (command, data, balance, tAmt, tBalance) {
        var newCommand = command.split('0x')[1];
        var retData = [];
        var preci = ethers_1.ethers.utils.parseEther("1");
        var amt = (balance.mul(tAmt).mul(preci)).div(tBalance).div(preci);
        console.log(balance, tAmt, tBalance, amt);
        for (var i = 0; i < newCommand.length; i += 2) {
            var tCommand = "0x".concat(newCommand[i]).concat(newCommand[i + 1]);
            if (tCommand == "0x08") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].mul(amt).mul(preci).div(tAmt).div(preci), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x09") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1].mul(amt).mul(preci).div(tAmt).div(preci), amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x00") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], amt, res[2].mul(amt).mul(preci).div(tAmt).div(preci), res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x01") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], amt, res[3], res[4]]));
                continue;
            }
            if (tCommand == "0x05") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].mul(amt).div(tAmt)]));
                continue;
            }
            if (tCommand == "0x04") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], res[1], res[2].mul(amt).div(tAmt)]));
                continue;
            }
            if (tCommand == "0x0c") {
                var res = ethers_1.ethers.utils.defaultAbiCoder.decode(config_1.abi[tCommand], data[i / 2]);
                retData.push(ethers_1.ethers.utils.defaultAbiCoder.encode(config_1.abi[tCommand], [res[0], ethers_1.ethers.BigNumber.from("0")]));
                continue;
            }
            retData.push(data[i / 2]);
        }
        return retData;
    };
    TxService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, db, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'))];
                    case 1:
                        data = _a.sent();
                        db = JSON.parse(data.toString());
                        return [2, db];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2, null];
                    case 3: return [2];
                }
            });
        });
    };
    TxService.prototype.getUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, db, userInfo, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'))];
                    case 1:
                        data = _a.sent();
                        db = JSON.parse(data.toString());
                        userInfo = db.filter(function (item) { return item.userId == userId; });
                        return [2, userInfo];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2, null];
                    case 3: return [2];
                }
            });
        });
    };
    TxService.prototype.createUser = function (userId, inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var data, db, newInputs, i, startBlockNumber, newUser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4, fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'))];
                    case 1:
                        data = _a.sent();
                        db = JSON.parse(data.toString());
                        newInputs = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < inputs.length)) return [3, 5];
                        return [4, this.getCurrentBlockNumber(config_1.chainIdToApi[inputs[i].chainId], config_1.chainIdToApiKey[inputs[i].chainId])];
                    case 3:
                        startBlockNumber = _a.sent();
                        newInputs.push(__assign(__assign({}, inputs[i]), { startBlockNumber: startBlockNumber }));
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3, 2];
                    case 5:
                        newUser = {
                            userId: userId,
                            inputs: newInputs,
                            txs: []
                        };
                        db.push(newUser);
                        return [4, fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(db))];
                    case 6:
                        _a.sent();
                        return [2, true];
                    case 7:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2, false];
                    case 8: return [2];
                }
            });
        });
    };
    TxService.prototype.updateAll = function (newDB) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB))];
                    case 1:
                        _a.sent();
                        return [2, true];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2, false];
                    case 3: return [2];
                }
            });
        });
    };
    TxService.prototype.updateTx = function (userId, tx) {
        return __awaiter(this, void 0, void 0, function () {
            var data, db, newDB, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'))];
                    case 1:
                        data = _a.sent();
                        db = JSON.parse(data.toString());
                        newDB = db.map(function (item) { return item.userId != userId ? item : __assign(__assign({}, item), { txs: __spreadArray(__spreadArray([], item.txs, true), [tx], false) }); });
                        return [4, fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB))];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [2, false];
                    case 4: return [2];
                }
            });
        });
    };
    TxService.prototype.deleteUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, db, newDB, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, fs_1.promises.readFile(path_1.default.resolve(__dirname, './db/db.json'))];
                    case 1:
                        data = _a.sent();
                        db = JSON.parse(data.toString());
                        newDB = db.filter(function (item) { return item.userId != userId; });
                        return [4, fs_1.promises.writeFile(path_1.default.resolve(__dirname, './db/db.json'), JSON.stringify(newDB))];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [2, false];
                    case 4: return [2];
                }
            });
        });
    };
    TxService.prototype.approve = function (chainId, walletPK, targetAddr, permitAddr, address) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonProvider, signer, erc20, balance, targetBalance, allowance, tx, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jsonProvider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.chainIdToRPC[chainId]);
                        signer = new ethers_1.ethers.Wallet(walletPK, jsonProvider);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        erc20 = new ethers_1.ethers.Contract(address, config_1.ERC20_ABI, signer);
                        console.log("approve func");
                        return [4, erc20.allowance(signer.address, permitAddr)];
                    case 2:
                        allowance = _a.sent();
                        console.log(allowance, erc20.address);
                        return [4, erc20.balanceOf(signer.address)];
                    case 3:
                        balance = _a.sent();
                        console.log(balance, signer.address);
                        return [4, erc20.balanceOf(targetAddr)];
                    case 4:
                        targetBalance = _a.sent();
                        console.log(targetBalance, targetAddr);
                        if (!(allowance < ethers_1.ethers.utils.parseEther("100000"))) return [3, 6];
                        return [4, erc20.approve(permitAddr, ethers_1.ethers.utils.parseEther("999999"), { gasLimit: 200000 })];
                    case 5:
                        tx = _a.sent();
                        console.log(tx);
                        return [2, { success: true, balance: balance, targetBalance: targetBalance }];
                    case 6: return [3, 8];
                    case 7:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3, 8];
                    case 8: return [2, { success: false, balance: balance, targetBalance: targetBalance }];
                }
            });
        });
    };
    TxService.prototype.ExecutionTx = function (userId, walletPK, targetAddr, chainId, methodName, params, value, gas) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonProvider, signer, router, approveTxFlag, percent, tAmt, cBalance, tBalance, tokenAddress, _a, address, amount, _b, success, balance, targetBalance, contractMethod, nonce, newParams, newValue, USDPriceInfo, temp, firstP_1, firstP_2, tx, currentBlock, blockTimestamp, error_9;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        jsonProvider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.chainIdToRPC[chainId]);
                        signer = new ethers_1.ethers.Wallet(walletPK, jsonProvider);
                        router = new ethers_1.ethers.Contract(config_1.chainIdToRouter[chainId], config_1.UNISWAP_UNIVERSAL_ROUTER_ABI, signer);
                        approveTxFlag = false;
                        value = ethers_1.ethers.BigNumber.from(value);
                        if (!value.eq(ethers_1.ethers.utils.parseEther("0"))) return [3, 2];
                        _a = this.getCoinInfo(params[0], params[1]), address = _a.address, amount = _a.amount;
                        return [4, this.approve(chainId, walletPK, targetAddr, "0x000000000022D473030F116dDEE9F6B43aC78BA3", address)];
                    case 1:
                        _b = _c.sent(), success = _b.success, balance = _b.balance, targetBalance = _b.targetBalance;
                        approveTxFlag = success;
                        tAmt = amount;
                        cBalance = balance;
                        tBalance = targetBalance.add(amount);
                        tokenAddress = address;
                        _c.label = 2;
                    case 2:
                        contractMethod = params.length == 3 ? router['execute(bytes,bytes[],uint256)'] : router['execute(bytes,bytes[])'];
                        if (!contractMethod) return [3, 15];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 14, , 15]);
                        return [4, jsonProvider.getTransactionCount(signer.address)];
                    case 4:
                        nonce = _c.sent();
                        nonce = approveTxFlag ? nonce + 1 : nonce;
                        console.log(nonce);
                        newParams = params;
                        newValue = value;
                        if (!value.gt(ethers_1.ethers.utils.parseEther("0"))) return [3, 7];
                        return [4, axios_1.default.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')];
                    case 5:
                        USDPriceInfo = _c.sent();
                        return [4, jsonProvider.getBalance(signer.address)];
                    case 6:
                        newValue = _c.sent();
                        temp = parseFloat(ethers_1.ethers.utils.formatEther(value)) * USDPriceInfo.data.USD;
                        if (temp < 500) {
                            percent = ethers_1.ethers.BigNumber.from('20');
                            newValue = newValue.div(percent);
                        }
                        else {
                            if (temp < 5000) {
                                percent = ethers_1.ethers.BigNumber.from('10');
                                newValue = newValue.div(percent);
                            }
                            else {
                                percent = ethers_1.ethers.BigNumber.from('5');
                                newValue = newValue.div(percent);
                            }
                        }
                        firstP_1 = this.changeEtherAmt(params[0], params[1], newValue, value, percent);
                        newParams = params.map(function (item, index) { return index == 1 ? firstP_1 : item; });
                        return [3, 10];
                    case 7:
                        firstP_2 = this.changeTradeAmt(params[0], params[1], cBalance, tAmt, tBalance);
                        if (!(params[0] == '0x08060c' || params[0] == '0x0a08060c' || params[0] == '0x080604')) return [3, 9];
                        return [4, this.allow(chainId, walletPK, tokenAddress, config_1.chainIdToRouter[chainId], cBalance)];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        newParams = params.map(function (item, index) { return index == 1 ? firstP_2 : item; });
                        _c.label = 10;
                    case 10: return [4, contractMethod.apply(void 0, __spreadArray(__spreadArray([], newParams, false), [{ value: newValue, gasLimit: 500000, nonce: nonce }], false))];
                    case 11:
                        tx = _c.sent();
                        console.log(tx);
                        return [4, jsonProvider.getBlockNumber()];
                    case 12:
                        currentBlock = _c.sent();
                        return [4, jsonProvider.getBlock(currentBlock)];
                    case 13:
                        blockTimestamp = (_c.sent()).timestamp;
                        return [2, { txid: tx.hash, from: signer.address, to: router.address, methodName: methodName, amount: newValue, chainId: chainId, timestamp: blockTimestamp }];
                    case 14:
                        error_9 = _c.sent();
                        console.log(error_9);
                        return [2, ''];
                    case 15: return [2];
                }
            });
        });
    };
    TxService.prototype.getTransactionWithTimeout = function (socketProvider, txHash, timeoutInMs) {
        return __awaiter(this, void 0, void 0, function () {
            var timeoutPromise, transaction, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeoutPromise = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                reject(new Error("Timeout of ".concat(timeoutInMs, "ms exceeded")));
                            }, timeoutInMs);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, Promise.race([
                                socketProvider.getTransaction(txHash),
                                timeoutPromise
                            ])];
                    case 2:
                        transaction = _a.sent();
                        return [2, transaction];
                    case 3:
                        error_10 = _a.sent();
                        if (error_10.message.includes('Timeout')) {
                            console.warn('Transaction lookup timed out.');
                            return [2, null];
                        }
                        else {
                            console.error('Error fetching transaction:', error_10);
                            throw error_10;
                        }
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    TxService.prototype.sleep = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    };
    TxService.prototype.getCurrentBlockNumber = function (api, apiKey) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, blockNumber, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default.get("".concat(api, "?module=proxy&action=eth_blockNumber&apikey=").concat(apiKey))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        if (data.result) {
                            blockNumber = parseInt(data.result, 16);
                            return [2, blockNumber];
                        }
                        else {
                            console.error("Error: ".concat(data.message));
                        }
                        return [3, 3];
                    case 2:
                        error_11 = _a.sent();
                        console.error("HTTP Error: ".concat(error_11.message));
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    TxService.prototype.runNewSwapTx = function (userId, socketProvider, jsonProvider, walletPK, targetAddr, chainId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                socketProvider.on('block', function (blockNumber) { return __awaiter(_this, void 0, void 0, function () {
                    var block, i, item;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(blockNumber);
                                return [4, socketProvider.getBlock(blockNumber)];
                            case 1:
                                block = _a.sent();
                                for (i = 0; i < block.transactions.length; i++) {
                                    item = block.transactions[i];
                                }
                                return [2];
                        }
                    });
                }); });
                return [2];
            });
        });
    };
    TxService.prototype.handleCron = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, newDB, i, _a, inputs, userId, txs, newInputs, j, _b, chainId, walletPK, targetAddr, startBlockNumber, url, result, newBlockNumber, k, tx, iface, fragment, runTx;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, this.getAll()];
                    case 1:
                        db = _d.sent();
                        newDB = [];
                        i = 0;
                        _d.label = 2;
                    case 2:
                        if (!(i < db.length)) return [3, 13];
                        _a = db[i], inputs = _a.inputs, userId = _a.userId, txs = _a.txs;
                        newInputs = [];
                        j = 0;
                        _d.label = 3;
                    case 3:
                        if (!(j < inputs.length)) return [3, 11];
                        _b = inputs[j], chainId = _b.chainId, walletPK = _b.walletPK, targetAddr = _b.targetAddr, startBlockNumber = _b.startBlockNumber;
                        url = "".concat(config_1.chainIdToApi[chainId], "?module=account&action=txlist&address=").concat(targetAddr, "&startblock=").concat(startBlockNumber, "&endblock=99999999&sort=asc&apikey=").concat(config_1.chainIdToApiKey[chainId]);
                        return [4, axios_1.default.get(url)];
                    case 4: return [4, (_d.sent()).data];
                    case 5:
                        result = _d.sent();
                        newBlockNumber = startBlockNumber;
                        if (!(result.status == 1)) return [3, 9];
                        k = 0;
                        _d.label = 6;
                    case 6:
                        if (!(k < result.result.length)) return [3, 9];
                        tx = result.result[k];
                        if (!(((_c = tx.to) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === config_1.chainIdToRouter[chainId].toLowerCase())) return [3, 8];
                        iface = new ethers_1.ethers.utils.Interface(config_1.UNISWAP_UNIVERSAL_ROUTER_ABI);
                        fragment = iface.parseTransaction({ data: tx.input });
                        return [4, this.ExecutionTx(userId, walletPK, targetAddr, chainId, fragment.name, fragment.args, tx.value, tx.gas)];
                    case 7:
                        runTx = _d.sent();
                        if (runTx)
                            txs.push(runTx);
                        newBlockNumber = parseInt(tx.blockNumber) + 1;
                        _d.label = 8;
                    case 8:
                        k++;
                        return [3, 6];
                    case 9:
                        newInputs.push({ chainId: chainId, walletPK: walletPK, targetAddr: targetAddr, startBlockNumber: newBlockNumber });
                        _d.label = 10;
                    case 10:
                        j++;
                        return [3, 3];
                    case 11:
                        newDB.push({ userId: userId, inputs: newInputs, txs: txs });
                        _d.label = 12;
                    case 12:
                        i++;
                        return [3, 2];
                    case 13: return [4, this.updateAll(newDB)];
                    case 14:
                        _d.sent();
                        return [2];
                }
            });
        });
    };
    TxService.prototype.startTrade = function (runTxDto) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.createUser(runTxDto.userId, runTxDto.inputs)];
                    case 1:
                        userInfo = _a.sent();
                        return [2];
                }
            });
        });
    };
    TxService.prototype.stopTrade = function (stopTxDto) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.deleteUser(stopTxDto.userId)];
                    case 1:
                        userInfo = _a.sent();
                        return [2];
                }
            });
        });
    };
    __decorate([
        (0, schedule_1.Cron)('*/20 * * * * *'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TxService.prototype, "handleCron", null);
    TxService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], TxService);
    return TxService;
}());
exports.TxService = TxService;
//# sourceMappingURL=tx.service.js.map