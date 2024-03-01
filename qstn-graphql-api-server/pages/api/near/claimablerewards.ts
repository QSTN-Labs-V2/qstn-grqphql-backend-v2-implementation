import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import NearConnect from "../../../lib/near.config";
import { bytes, str } from "near-sdk-js";
import { encode } from 'js-base64';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
    const { profileId } = req.query;
    const NEAR_VAULT_CONTRACT_ID = process.env.NEAR_VAULT_CONTRACT_ID;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    try {
      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      const { providers } = require("near-api-js");

      //network config (replace testnet with mainnet or betanet)
      const provider = new providers.JsonRpcProvider(
        "https://rpc.testnet.near.org"
      );
      
      const response = await provider.query({
        request_type: "call_function",
        finality: "final",
        account_id: NEAR_VAULT_CONTRACT_ID,
        method_name: "get_claimable_rewards",
        args_base64: encode(`{"key":"${encode(String(profileId))}"}`),
      });

      res.status(200).json({
        block_hash: response.block_hash, 
        block_height: response.block_height, 
        data: JSON.parse(String.fromCharCode.apply(null, response.result)),
        success: true
      });
    } catch (error) {
      const errorResponse = {
        statusCode: 500,
        message: error.message || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }
  
};

export default handler;
