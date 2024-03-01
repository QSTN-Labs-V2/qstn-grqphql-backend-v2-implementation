import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import { encode } from 'js-base64';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { profileId, reward } = req.body;
    const NEAR_VAULT_CONTRACT_ID = process.env.NEAR_VAULT_CONTRACT_ID;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!profileId) {
      throw new Error('No profileId or reward provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No profileId or reward provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");

    const contract = await nearContract({
        contractId: NEAR_VAULT_CONTRACT_ID,
        account: account,
        viewMethods: [],
        changeMethods: ["create_reward"]
    });

  try {
    
    //if (!response) {
      const args = {
        key: `${encode(String(profileId))}`,
        reward: reward
      }

      const nearGas = String(30000000000000);
      //const nearAmount = parseNearAmount(String(0.01)) // amount in yoctoNEAR;
      const creditBalanceParams = { args: args, gas: nearGas };
      const newreward = await contract.create_reward(creditBalanceParams);
      console.log('new created reward', newreward);

      //console.log('response ', response);
      res.status(200).json({data: { newcreatedreward: newreward }, success: true});

    //}
    //console.log('response', response);
    
    //res.status(200).json({data: response, success: true});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
