import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { creatorId } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!creatorId ) {
      throw new Error('No creatorId provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No creatorId provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");
    const contractId = "nft-testnet.qstn-alpha.testnet";

    const contract = await nearContract({
        contractId: contractId,
        account: account,
        viewMethods: ["is_approved_creator"],
        changeMethods: []
    });

  try {
    
    //console.log('contract', contract);
    const response = await contract.is_approved_creator({ account_id: creatorId });
    console.log('response', response);
    
    res.status(200).json({data: response, success: true});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
