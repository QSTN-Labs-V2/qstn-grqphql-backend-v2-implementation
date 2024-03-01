import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { receiverId, seriesId } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!receiverId || !seriesId) {
      // throw new Error('No receiverId or seriesId provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No receiverId or seriesId provided' || 'An error occurred',
        success: false,
      };
      return res.status(500).json(errorResponse);
    }

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");

    const contract = await nearContract({
        contractId: "nft-testnet.qstn-alpha.testnet",
        account: account,
        viewMethods: ["is_approved_minter", "get_series_total_supply"],
        changeMethods: ["nft_mint", "add_approved_minter"]
    });

  try {
    
    //console.log('contract', contract);
    //const response = await contract.is_approved_minter({ account_id: account });
    //const total_supply = await contract.get_series_total_supply();
    //if (!response) {
      const args = {
        id: seriesId,
        receiver_id: receiverId
      }
      const nearGas = String(30000000000000);
      const nearAmount = parseNearAmount(String(0.1)) // amount in yoctoNEAR;
      const mintParams = { args: args, gas: nearGas, amount: nearAmount };
      const newmint = await contract.nft_mint(mintParams);
      // console.log('new mint', newmint);
    
      //const response = await contract.is_approved_creator({ account_id: creatorId });
      //console.log('response ', response);
      return res.status(200).json({data: { newmint: seriesId, receiver: receiverId }, success: true});

    //}
    //console.log('response', response);
    
    //res.status(200).json({data: response, success: true});
  } catch (err: any) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
