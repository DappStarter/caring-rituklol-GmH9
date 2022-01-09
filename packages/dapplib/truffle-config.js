require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index rice place modify hidden gloom swallow gate'; 
let testAccounts = [
"0x7d7c420af54bad75b57adb68bfdc4b9221c22c15dfb3c6668f7133dc690fb610",
"0xeda61e7664c7d09db22b789f45727f5eeb02530c61cc23c7182016b6cb023ae7",
"0x67a2ba46dab3eeec8245e8d9e7de2469c8be9d2e1fec84e3da5acff8dbc8dc54",
"0xd1b639cc65e0d31d98f8ee9b509b72384fc0dfe8b2c15b9ee4f07ea5272029f7",
"0x830e478167bdb80afb6f957d4af0749757011803d58b706525281a132042cfb0",
"0xfd2ea392f5f71da6112314c48979b0a54df737fc9733c7b663c34a35d8f6c1d7",
"0x13a1f2a670f00457dcaeefb4f46d556d0027ce63c3bc1cd851684ef2c251a46c",
"0xdcea4ed09b64904adde3085247712b8fc6487290f46fddde60b9a58044c5e656",
"0xc5b3811d880066825a82e5d1d78792a94d053be6feb587ec353e1a72f8b04802",
"0x4f333cad4a3eb129bde94285b33e6277f4de7bb0f3d628193e76b530a333607e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


