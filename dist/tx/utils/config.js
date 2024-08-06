"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = exports.allSwapData = exports.coinAddressWithProxy = exports.chainIdToRouter = exports.chainIdToApiKey = exports.chainIdToApi = exports.chainIdToWss = exports.chainIdToRPC = exports.EVMChainIds = exports.ERC20_ABI = exports.UNISWAP_UNIVERSAL_ROUTER_ABI = exports.UNISWAP_ROUTER_ABI = exports.IS_MAINNET = void 0;
exports.IS_MAINNET = true;
exports.UNISWAP_ROUTER_ABI = [
    { "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }
];
exports.UNISWAP_UNIVERSAL_ROUTER_ABI = [{ "inputs": [{ "components": [{ "internalType": "address", "name": "permit2", "type": "address" }, { "internalType": "address", "name": "weth9", "type": "address" }, { "internalType": "address", "name": "seaportV1_5", "type": "address" }, { "internalType": "address", "name": "seaportV1_4", "type": "address" }, { "internalType": "address", "name": "openseaConduit", "type": "address" }, { "internalType": "address", "name": "nftxZap", "type": "address" }, { "internalType": "address", "name": "x2y2", "type": "address" }, { "internalType": "address", "name": "foundation", "type": "address" }, { "internalType": "address", "name": "sudoswap", "type": "address" }, { "internalType": "address", "name": "elementMarket", "type": "address" }, { "internalType": "address", "name": "nft20Zap", "type": "address" }, { "internalType": "address", "name": "cryptopunks", "type": "address" }, { "internalType": "address", "name": "looksRareV2", "type": "address" }, { "internalType": "address", "name": "routerRewardsDistributor", "type": "address" }, { "internalType": "address", "name": "looksRareRewardsDistributor", "type": "address" }, { "internalType": "address", "name": "looksRareToken", "type": "address" }, { "internalType": "address", "name": "v2Factory", "type": "address" }, { "internalType": "address", "name": "v3Factory", "type": "address" }, { "internalType": "bytes32", "name": "pairInitCodeHash", "type": "bytes32" }, { "internalType": "bytes32", "name": "poolInitCodeHash", "type": "bytes32" }], "internalType": "struct RouterParameters", "name": "params", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "BalanceTooLow", "type": "error" }, { "inputs": [], "name": "BuyPunkFailed", "type": "error" }, { "inputs": [], "name": "ContractLocked", "type": "error" }, { "inputs": [], "name": "ETHNotAccepted", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "commandIndex", "type": "uint256" }, { "internalType": "bytes", "name": "message", "type": "bytes" }], "name": "ExecutionFailed", "type": "error" }, { "inputs": [], "name": "FromAddressIsNotOwner", "type": "error" }, { "inputs": [], "name": "InsufficientETH", "type": "error" }, { "inputs": [], "name": "InsufficientToken", "type": "error" }, { "inputs": [], "name": "InvalidBips", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "commandType", "type": "uint256" }], "name": "InvalidCommandType", "type": "error" }, { "inputs": [], "name": "InvalidOwnerERC1155", "type": "error" }, { "inputs": [], "name": "InvalidOwnerERC721", "type": "error" }, { "inputs": [], "name": "InvalidPath", "type": "error" }, { "inputs": [], "name": "InvalidReserves", "type": "error" }, { "inputs": [], "name": "InvalidSpender", "type": "error" }, { "inputs": [], "name": "LengthMismatch", "type": "error" }, { "inputs": [], "name": "SliceOutOfBounds", "type": "error" }, { "inputs": [], "name": "TransactionDeadlinePassed", "type": "error" }, { "inputs": [], "name": "UnableToClaim", "type": "error" }, { "inputs": [], "name": "UnsafeCast", "type": "error" }, { "inputs": [], "name": "V2InvalidPath", "type": "error" }, { "inputs": [], "name": "V2TooLittleReceived", "type": "error" }, { "inputs": [], "name": "V2TooMuchRequested", "type": "error" }, { "inputs": [], "name": "V3InvalidAmountOut", "type": "error" }, { "inputs": [], "name": "V3InvalidCaller", "type": "error" }, { "inputs": [], "name": "V3InvalidSwap", "type": "error" }, { "inputs": [], "name": "V3TooLittleReceived", "type": "error" }, { "inputs": [], "name": "V3TooMuchRequested", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardsSent", "type": "event" }, { "inputs": [{ "internalType": "bytes", "name": "looksRareClaim", "type": "bytes" }], "name": "collectRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "commands", "type": "bytes" }, { "internalType": "bytes[]", "name": "inputs", "type": "bytes[]" }], "name": "execute", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "commands", "type": "bytes" }, { "internalType": "bytes[]", "name": "inputs", "type": "bytes[]" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "execute", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC1155BatchReceived", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC1155Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "amount0Delta", "type": "int256" }, { "internalType": "int256", "name": "amount1Delta", "type": "int256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "uniswapV3SwapCallback", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
exports.ERC20_ABI = [
    {
        "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }],
        "name": "approve",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "nonpayable", "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }],
        "name": "allowance",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view", "type": "function"
    }
];
exports.EVMChainIds = [
    1,
    11155111,
    8453,
    84531
];
exports.chainIdToRPC = {
    1: 'https://eth.llamarpc.com',
    11155111: 'https://ethereum-sepolia-rpc.publicnode.com',
    8453: 'https://mainnet.base.org',
    84531: 'https://base-goerli.public.blastapi.io',
};
exports.chainIdToWss = {
    1: 'wss://ethereum-sepolia-rpc.publicnode.com',
    11155111: 'wss://ethereum-sepolia-rpc.publicnode.com',
    8453: 'wss://base-rpc.publicnode.com',
    84531: 'wss://base-sepolia-rpc.publicnode.com',
};
exports.chainIdToApi = {
    1: 'https://api.etherscan.io/api',
    11155111: 'https://api-sepolia.etherscan.io/api',
    8453: 'https://api.basescan.org/api',
    84531: 'https://api-sepolia.basescan.org/api',
};
exports.chainIdToApiKey = {
    1: '972MQVYDRC95XAGEI5YTU8UWUYYVNC1FRX',
    11155111: '972MQVYDRC95XAGEI5YTU8UWUYYVNC1FRX',
    8453: '8GHIJ9GDX75SRXR1MCYEZ66ZE319FGYZ5Q',
    84531: '8GHIJ9GDX75SRXR1MCYEZ66ZE319FGYZ5Q'
};
exports.chainIdToRouter = {
    1: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    11155111: '0x425141165d3DE9FEC831896C016617a52363b687',
    8453: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    84531: '...'
};
exports.coinAddressWithProxy = {
    1: [
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    ],
    8453: [
        '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    ],
};
exports.allSwapData = {
    '0x01050c': {
        data: [
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000002144367967ca6f000000000000000000000000000000000000000000017eae2b0bfc677538151b00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b42000000000000000000000000000000000000060027103c4c68236774b3cda9647d5bc534ab3841b3bfbf000000000000000000000000000000000000000000',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000153cc8c2f8d8',
            '0x0000000000000000000000005c3170564befa479ed70e89d22df361f76fe790100000000000000000000000000000000000000000000000000212ef9b0a4d197'
        ],
        address: '0x532f27101965dd16442E59d40670FaF5eBB142E4'
    },
    '0x0a00060c': {
        data: [
            '0x000000000000000000000000bcbaf311cec8a4eac0430193a528d9ff27ae38c1000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000066c5de8900000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad00000000000000000000000000000000000000000000000000000000669e589100000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000416e6214e5983fc323308721c3db475e8e0619059dbfc0d10a402066fca5e4c6bd76c4b9418460791b1f8f3c97261981ffb66c46920fb1cfe8bcae1fba3faebf8a1c00000000000000000000000000000000000000000000000000000000000000',
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000001e205cd3d52eb9de60000000000000000000000000000000000000000000000000001bf87329bf8f400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002bbcbaf311cec8a4eac0430193a528d9ff27ae38c1000bb84200000000000000000000000000000000000006000000000000000000000000000000000000000000',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000000000000019',
            '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000001bf87329bf8f4'
        ],
        address: '0x532f27101965dd16442E59d40670FaF5eBB142E4'
    },
    '0x08060c': {
        data: [
            '0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000005ade662e3fcea560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f64a7ceb5a5084b2eee7385118772826c949cff70000000000000000000000004200000000000000000000000000000000000006',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000000000000019',
            '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001'
        ],
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    },
    '0x0a080c': {
        data: [
            '0x0000000000000000000000008cd62ce2832fd4f978fb3c6b76e9e5d2b6ec42d5000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000796cf20900000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad00000000000000000000000000000000000000000000000000000000796cf20900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000041b02b092f502bdbad890d111d389cd4aee1015b470c4bdb2c4ea6421a7dc6249321101c307fd39b722196ea8aa850dffadcbf064012dfd0368c241fd44e38450c1b00000000000000000000000000000000000000000000000000000000000000',
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000133f3ac36ccf90767836eec0c0000000000000000000000000000000000000000000000000020b74bcfa5bad700000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000008cd62ce2832fd4f978fb3c6b76e9e5d2b6ec42d50000000000000000000000004200000000000000000000000000000000000006',
            '0x0000000000000000000000006386ba57747abde86f03a149abebc7f1facfcb4a0000000000000000000000000000000000000000000000000020b74bcfa5bad7'
        ],
        address: '0xF58676ccfC198F368ca03fDC1aB033f1e8261370'
    },
    '0x080c': {
        data: [
            '0x0000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad000000000000000000000000000000000000000000000000000002319163d5b3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000be5614875952b1683cb0a2c20e6509be46d353a40000000000000000000000004200000000000000000000000000000000000006',
            '0x0000000000000000000000007df7c976e2e3ba335b5d3ba1a925b4ced45551110000000000000000000000000000000000000000000000000000000000000000'
        ],
        address: '0xBE5614875952b1683cb0A2C20E6509be46d353a4'
    },
    '0x0a0800060c': {
        data: [
            '0x000000000000000000000000c7bf3bc62e15d837466dd515eb80210347d7be1d000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000066c5508800000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad00000000000000000000000000000000000000000000000000000000669dca9000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000004192a1df0adbcf706858c2cfb27c734936c7dfdf2d0d567e076925fa93054668ee19aa4fcd3affc4ecdfecf167937ecdfbf499a0d205853bb7f07da1754a7a83411b00000000000000000000000000000000000000000000000000000000000000',
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000002f1c93bf060db3ae757c0000000000000000000000000000000000000000000000000023e99b8906cd1e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c7bf3bc62e15d837466dd515eb80210347d7be1d0000000000000000000000004200000000000000000000000000000000000006',
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000001430d19b0298286f56ec000000000000000000000000000000000000000000000000000f56108bc3858d00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002bc7bf3bc62e15d837466dd515eb80210347d7be1d0027104200000000000000000000000000000000000006000000000000000000000000000000000000000000',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000000000000019',
            '0x000000000000000000000000a80ebf90bfff01eba100d21386f8e633c95efb41000000000000000000000000000000000000000000000000003328b02c20b4b7'
        ],
        address: '0x532f27101965dd16442E59d40670FaF5eBB142E4'
    },
    '0x00060c': {
        data: [
            '0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000001454db6c566027f9db30000000000000000000000000000000000000000000000000058ebc8b66cd5b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000042e642657e4f43e6dcf0bd73ef24008394574dee28000bb8833589fcd6edb6e08f4c7c32d4f71b54bda029130001f44200000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000000000000019',
            '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000058ebc8b66cd5b0'
        ],
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    },
    '0x0a08060c': {
        data: [
            '0x00000000000000000000000051305fe2353e40f8a472fcab36c8dc43683b55ff000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000122b60e0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad0000000000000000000000000000000000000000000000000000000122b60e0f00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000041e4094510c91275aced41eaa87df2fcc2ba556298d85ccc0839cdcec2f17575417091722e273937fbe097762e41295680a387f49ca5bd78811f341f402293650f1b00000000000000000000000000000000000000000000000000000000000000',
            '0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000067aa523e57d3090560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000051305fe2353e40f8a472fcab36c8dc43683b55ff0000000000000000000000004200000000000000000000000000000000000006',
            '0x00000000000000000000000042000000000000000000000000000000000000060000000000000000000000005d64d14d2cf4fe5fe4e65b1c7e3d11e18d4930910000000000000000000000000000000000000000000000000000000000000019',
            '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001'
        ],
        address: '0x532f27101965dd16442E59d40670FaF5eBB142E4'
    },
    '0x08': {
        data: [
            '0x000000000000000000000000ddcc6acbc9267d75f1d20faf3925a42e7300b6730000000000000000000000000000000000000000003f870857a3e0e38000000000000000000000000000000000000000000000000000000006b894ec3a2ff77400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000026f1bb40ea88b46ceb21557dc0ffac7b7c0ad40f0000000000000000000000004200000000000000000000000000000000000006'
        ],
        address: '0x532f27101965dd16442E59d40670FaF5eBB142E4'
    },
};
exports.abi = {
    "0x00": ["address", "uint256", "uint256", "bytes", "bool"],
    "0x01": ["address", "uint256", "uint256", "bytes", "bool"],
    "0x04": ["address", "address", "uint256"],
    "0x05": ["address", "address", "uint256"],
    "0x06": ["address", "address", "uint256"],
    '0x08': ["address", "uint256", "uint256", "address[]", "bool"],
    '0x09': ["address", "uint256", "uint256", "address[]", "bool"],
    '0x0a': ["((address, uint160, uint48, uint48), address, uint256)", "bytes"],
    "0x0b": ["address", "uint256"],
    "0x0c": ["address", "uint256"]
};
//# sourceMappingURL=config.js.map