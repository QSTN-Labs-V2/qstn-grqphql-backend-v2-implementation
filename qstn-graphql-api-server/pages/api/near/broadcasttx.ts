import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { signedTransaction } = req.body;
    let response: any = null; 
    
    //if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
    //    res.status(204).end();

    console.log('signedTransaction BEFORE', signedTransaction)
    try {
      if (!signedTransaction) {
        throw new Error('No Signed transaction provided');
        const errorResponse = {
          statusCode: 500,
          message: 'No Signed transaction provided' || 'An error occurred',
          success: false,
        };
        res.status(500).json(errorResponse);
      }

      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      const { providers } = require("near-api-js");
      
      console.log(signedTransaction)
      //network config (replace testnet with mainnet or betanet)
      const provider = new providers.JsonRpcProvider(
        "https://rpc.testnet.near.org"
      );

      response = await provider.sendJsonRpc('broadcast_tx_commit', [signedTransaction]);
      response = {data: [response], success: true};
  
      res.status(200).json(response);
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
