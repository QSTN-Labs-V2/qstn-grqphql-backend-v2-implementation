import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { creatorId, title, description, media, copies } = req.body;

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
        viewMethods: ["is_approved_creator", "get_series_total_supply"],
        changeMethods: ["create_series"]
    });

  try {

    const total_supply = await contract.get_series_total_supply();
      const args = {
        id: parseInt(total_supply)+1, 
          metadata: 
          {
            title: title, 
            description: description, 
            media: media,
            copies: Number(copies)
          }
      }
      const nearGas = String(30000000000000);
      const nearAmount = parseNearAmount(String(0.01)) // amount in yoctoNEAR;
      const createSerieParams = { args: args, gas: nearGas, amount: nearAmount };
      const newserie = await contract.create_series(createSerieParams);
      console.log('new serie', newserie);
      res.status(200).json({data: { newserie: parseInt(total_supply)+1 }, success: true});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
