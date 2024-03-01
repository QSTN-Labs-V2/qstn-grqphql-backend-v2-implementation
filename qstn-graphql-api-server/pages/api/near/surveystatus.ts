import { NextApiRequest, NextApiResponse } from "next";
import NearConnect from "../../../lib/near.config";
import { bytes, str } from "near-sdk-js";
import { encode } from 'js-base64';
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { surveyId } = req.body;
    
    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    try {
      if (!surveyId) {
        throw new Error('No surveyId provided');
        const errorResponse = {
          statusCode: 500,
          message: 'No surveyId provided' || 'An error occurred',
          success: false,
        };
        return res.status(500).json(errorResponse);
      }
      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      const { providers } = require("near-api-js");

      //network config (replace testnet with mainnet or betanet)
      const provider = new providers.JsonRpcProvider(
        "https://rpc.testnet.near.org"
      );
      
      const response = await provider.query({
        request_type: "call_function",
        finality: "final",
        account_id: `qstnsry${surveyId}.surveyv12-testnet.qstn-alpha.testnet`,
        method_name: "get_balance",
        args_base64: encode(`{"account_id":"qstnsry${surveyId}.surveyv12-testnet.qstn-alpha.testnet"}`),
      });

      res.status(200).json({
        block_hash: response.block_hash, 
        block_height: response.block_height, 
        result: JSON.parse(String.fromCharCode.apply(null, response.result)),
        success: true
      });

    } catch (error) {
      const errorResponse = {
        statusCode: 500,
        message: error.message || 'An error occurred',
        success: false,
      };
      return res.status(500).json(errorResponse);
    }
  
};

export default handler;
