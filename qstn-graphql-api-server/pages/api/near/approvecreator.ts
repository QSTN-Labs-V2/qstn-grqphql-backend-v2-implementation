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

    const contract = await nearContract({
        contractId: "nft-testnet.qstn-alpha.testnet",
        account: account,
        viewMethods: ["is_approved_creator"],
        changeMethods: ["add_approved_creator"]
    });

  try {
    
    //console.log('contract', contract);
    //const response = await contract.is_approved_creator({ account_id: creatorId });
    //if (!response) {
      const args = { account_id: creatorId }
      const nearGas = String(80000000000000);
      const approveParams = { args: args, gas: nearGas };
      const approvecreator = await contract.add_approved_creator(approveParams);
      console.log('approvecreator', approvecreator);
    
      //const response = await contract.is_approved_creator({ account_id: creatorId });
      //console.log('response ', response);
      res.status(200).json({data: approvecreator, success: true});

    //}
    //console.log('response', response);
    
    //res.status(200).json({data: response, success: true});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
