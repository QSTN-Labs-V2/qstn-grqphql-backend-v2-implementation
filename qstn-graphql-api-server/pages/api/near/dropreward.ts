import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import { encode } from 'js-base64';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { profileId, amount } = req.body;
    const NEAR_LINKDROP_CONTRACT_ID = process.env.NEAR_LINKDROP_CONTRACT_ID;
    const FUNDING_ACCOUNT_ID = "qstn-alpha.testnet"; //process.env.FUNDING_ACCOUNT_ID;
    const LINKDROP_NEAR_AMOUNT = "0.1";//process.env.LINKDROP_NEAR_AMOUNT;
    const SEND_MULTIPLE = "false";//process.env.SEND_MULTIPLE;
    
    const OFFSET = 0.1;
    
    const NETWORK_ID = "testnet";
    const keyPairs = [];
    const pubKeys = [];

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!profileId || !amount ) {
      throw new Error('No profileId or amount provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No profileId or amount provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    const nearAPI = require("near-api-js");

    if(!NEAR_LINKDROP_CONTRACT_ID || !FUNDING_ACCOUNT_ID || !LINKDROP_NEAR_AMOUNT || !SEND_MULTIPLE) {
      throw "must specify proxy contract ID, funding account ID, linkdrop $NEAR amount and whether to send multiple";
    }   

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");
    const { keyStores, KeyPair } = nearAPI;
		const keyPair = await KeyPair.fromRandom('ed25519'); 
		keyPairs.push(keyPair);   
		pubKeys.push(keyPair.publicKey.toString());   

    const contract = await nearContract({
        contractId: NEAR_LINKDROP_CONTRACT_ID,
        account: account,
        viewMethods: [],
        changeMethods: ["send"]
    });

    console.log("Sending one linkdrop");

  try {
    
    //if (!response) {
      const args = {
          public_key: pubKeys[0],
          balance: parseNearAmount(LINKDROP_NEAR_AMOUNT)
      }

      const nearGas = String(30000000000000);
      const nearAmount = parseNearAmount((parseFloat(LINKDROP_NEAR_AMOUNT) + OFFSET).toString()) // amount in yoctoNEAR;
      const dropParams = { args: args, gas: nearGas, amount: nearAmount};
      const newlinkdrop = await contract.send(dropParams);
      console.log('new link-drop reward', newlinkdrop);
      const lnkdrops = [];
      for(let i = 0; i < keyPairs.length; i++) {
        lnkdrops.push(`https://wallet.testnet.near.org/linkdrop/${NEAR_LINKDROP_CONTRACT_ID}/${keyPairs[i].secretKey}`);
        console.log(`https://wallet.testnet.near.org/linkdrop/${NEAR_LINKDROP_CONTRACT_ID}/${keyPairs[i].secretKey}`);
        console.log("Pub Key: ", keyPairs[i].publicKey.toString());
      }

      res.status(200).json({data: { linkdrop: lnkdrops }, success: true});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
