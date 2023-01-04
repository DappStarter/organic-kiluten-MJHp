require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note pumpkin collect install permit fortune gesture'; 
let testAccounts = [
"0x94bac4b03ae4c6cf5418c52b537edf6464272e22fed49dffc446d28779268105",
"0xd8c9b2aec2549a3cec1a5e18dfdf8c40bce9123aa3a54b041a6aa554f5c2a477",
"0x130fbad88823e711a201d695a960b246bc26653b033b6a5b30fb7a5d8c51060a",
"0x8f258b5258181fa52bf010259977ee9847869f4b518101b06712796d3ff8cf12",
"0xba22a9574bd4641df7a9aca94964792f3d70b2271fceab760c0007ab51560f73",
"0xec1181c3234bedff31a6301e42412426fd7f15f73254a726c87c110633de148b",
"0xf9b78bf0e4f01b4e87dc616811a7711f058a9ccb629ba5e29c9ae212697feb38",
"0xae8e6cef20eb8ad26bc5d55a80b694b519544ac7afdc69b20d6585065f176bd6",
"0xeb9502adfae618f7e820b7cc559d230065985746ab9bf41ce9a5dac0869024a2",
"0xdcfde0a28eda32a418abd5fb29abc6b1d1862e18c8d9b82042e280047eb953d6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

