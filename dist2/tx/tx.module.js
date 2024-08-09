"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxModule = void 0;
var common_1 = require("@nestjs/common");
var tx_service_1 = require("./tx.service");
var tx_controller_1 = require("./tx.controller");
var TxModule = (function () {
    function TxModule() {
    }
    TxModule = __decorate([
        (0, common_1.Module)({
            controllers: [tx_controller_1.TxController],
            providers: [tx_service_1.TxService],
        })
    ], TxModule);
    return TxModule;
}());
exports.TxModule = TxModule;
//# sourceMappingURL=tx.module.js.map