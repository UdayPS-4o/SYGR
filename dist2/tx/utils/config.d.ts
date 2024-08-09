export declare const IS_MAINNET = true;
export declare const UNISWAP_ROUTER_ABI: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    name?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
} | {
    stateMutability: string;
    type: string;
    inputs?: undefined;
    name?: undefined;
    outputs?: undefined;
})[];
export declare const UNISWAP_UNIVERSAL_ROUTER_ABI: ({
    inputs: {
        components: {
            internalType: string;
            name: string;
            type: string;
        }[];
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    name?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
} | {
    stateMutability: string;
    type: string;
    inputs?: undefined;
    name?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
})[];
export declare const ERC20_ABI: {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
}[];
export declare const EVMChainIds: number[];
export declare const chainIdToRPC: {
    1: string;
    11155111: string;
    8453: string;
    84531: string;
};
export declare const chainIdToWss: {
    1: string;
    11155111: string;
    8453: string;
    84531: string;
};
export declare const chainIdToApi: {
    1: string;
    11155111: string;
    8453: string;
    84531: string;
};
export declare const chainIdToApiKey: {
    1: string;
    11155111: string;
    8453: string;
    84531: string;
};
export declare const chainIdToRouter: {
    1: string;
    11155111: string;
    8453: string;
    84531: string;
};
export declare const coinAddressWithProxy: {
    1: string[];
    8453: string[];
};
export declare const allSwapData: {
    '0x01050c': {
        data: string[];
        address: string;
    };
    '0x0a00060c': {
        data: string[];
        address: string;
    };
    '0x08060c': {
        data: string[];
        address: string;
    };
    '0x0a080c': {
        data: string[];
        address: string;
    };
    '0x080c': {
        data: string[];
        address: string;
    };
    '0x0a0800060c': {
        data: string[];
        address: string;
    };
    '0x00060c': {
        data: string[];
        address: string;
    };
    '0x0a08060c': {
        data: string[];
        address: string;
    };
    '0x08': {
        data: string[];
        address: string;
    };
};
export declare const abi: {
    "0x00": string[];
    "0x01": string[];
    "0x04": string[];
    "0x05": string[];
    "0x06": string[];
    '0x08': string[];
    '0x09': string[];
    '0x0a': string[];
    "0x0b": string[];
    "0x0c": string[];
};
