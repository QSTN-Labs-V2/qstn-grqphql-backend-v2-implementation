import dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.NEAR_MAIN_ACCOUNT_PRIVATE_KEY;
const MAIN_ACCOUNT = process.env.NEAR_MAIN_ACCOUNT;
const CONTRACT_ID = process.env.NEAR_NFT_CONTRACT_ID;

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const nearAPI = require("near-api-js");

const nearConnect = async (network: string) => {
    const currentNetwork = network ? network : "testnet";

    try {
        // creates keyStore from a private key string
        // you can define your key here or use an environment variable
        const { keyStores, KeyPair, connect } = nearAPI;
        const myKeyStore = new keyStores.InMemoryKeyStore();
        // creates a public / private key pair using the provided private key
        const keyPair = KeyPair.fromString(PRIVATE_KEY);
        // adds the keyPair you created to keyStore
        await myKeyStore.setKey(currentNetwork, MAIN_ACCOUNT, keyPair);

        const connectionConfig = {
            networkId: network,
            keyStore: myKeyStore, // first create a key store 
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
          };

        const nearConnection = await connect(connectionConfig);

        return nearConnection;

    } catch (error) {
        console.log(error)
    }
}


export const nearContract = async ({account, viewMethods, changeMethods, contractId}:{account: any, viewMethods: string[], changeMethods: string[], contractId?: string}) => {
    const { Contract } = nearAPI;

    try {
        const contract = new Contract(
            account, // the account object that is connecting
            contractId ? contractId : CONTRACT_ID,
            {
              // name of contract you're connecting to
              viewMethods: viewMethods, // view methods do not change state but usually return a value
              changeMethods: changeMethods // change methods modify state
            }
          );

        return contract;

    } catch (error) {
        console.log(error)
    }
}


export default nearConnect;