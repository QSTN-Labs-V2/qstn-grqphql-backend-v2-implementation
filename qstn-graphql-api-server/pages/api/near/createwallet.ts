import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import { encode } from 'js-base64';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { profileId, balance } = req.body;
    const NEAR_VAULT_CONTRACT_ID = process.env.NEAR_VAULT_CONTRACT_ID;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!profileId ) {
      throw new Error('No profileId provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No profileId provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");

    const contract = await nearContract({
        contractId: NEAR_VAULT_CONTRACT_ID,
        account: account,
        viewMethods: ["get_balance"],
        changeMethods: ["create_wallet"]
    });

  try {
    
    //if (!response) {
      const args = {
        key: `${encode(String(profileId))}`,
        balance: balance
      }

      const nearGas = String(30000000000000);
      //const nearAmount = parseNearAmount(String(0.01)) // amount in yoctoNEAR;
      const createWalletParams = { args: args, gas: nearGas };
      const newwallet = await contract.create_wallet(createWalletParams);
      console.log('# newwallet ==>', newwallet);

      //console.log('response ', response);
      res.status(200).json({data: { newwallet: newwallet }, success: true});

    //}
    //console.log('response', response);
    
    //res.status(200).json({data: response, success: true});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
