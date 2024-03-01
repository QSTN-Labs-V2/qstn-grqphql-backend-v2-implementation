import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { sender, transactionHashes } = req.body;
    let response: any = null; 
    
    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    try {
      if (!sender || !transactionHashes) {
        throw new Error('No sender and/or transaction hash(es) provided');
        const errorResponse = {
          statusCode: 500,
          message: 'No sender and/or transaction hash(es) provided' || 'An error occurred',
          success: false,
        };
        res.status(500).json(errorResponse);
      }
      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      const { providers } = require("near-api-js");
      
      console.log({ providers, sender, transactionHashes })
      //network config (replace testnet with mainnet or betanet)
      const provider = new providers.JsonRpcProvider(
        "https://archival-rpc.testnet.near.org"
      );

      if (Array.isArray(transactionHashes)) {
        const results = await Promise.all(transactionHashes.map((hash) => {
          return provider.txStatus(hash, sender);
        }));

        console.log({ results })

        response = {data: results, success: true};

      } else {

        response = await provider.txStatus(transactionHashes, sender);
        response = {data: [response], success: true};
        
      }

      /*const response = await Promise.all(
        transactionHashes.map(async (hash) => {
          const status = await nearConnection.provider.txStatus(hash, sender);
          return { hash, status };
        })
      );*/
  
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
