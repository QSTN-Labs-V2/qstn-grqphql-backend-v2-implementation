import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { surveyId, resultId, profileId, proof, signature } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!surveyId || !resultId || !profileId || !proof || !signature) {
      throw new Error('No result/survey and/or profile provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No result/survey and/or profile provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    const CID = "XXXbafkreihvnxgldngd6qmuij4jvlob34dfjhtasyzsi5jajwayzndzes46hh";

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account("qstn-alpha.testnet");
    const accountBalance = await account.getAccountBalance();
    //const account_details = await account.getAccountDetails();
    //const account_state = await account.state();
    
    const newAnswerParams = {
      cid: CID, 
      proof: proof
    }

    const userCreditParams = {
      amount: 5
    }

    const contract = await nearContract({
        contractId: `qstnsry${surveyId}.surveyv12-testnet.qstn-alpha.testnet`,
        account: account,
        viewMethods: [],
        changeMethods: ["add_answer_proof", "debit_balance"]
    });

  try {
    //console.log('nearConnection', nearConnection);
    console.log('account -> ', account);
    console.log('contract -> ', contract);
    //console.log('account_details', account_details);
    //console.log('account_state', account_state);
    console.log('balance -> ', formatNearAmount(accountBalance?.total));
    
    //console.log('contract', contract);
    const nearGas = String(30000000000000);
    const nearAmount = parseNearAmount(String(0.001)) // amount in yoctoNEAR;
    console.log('Params ->', {args: newAnswerParams, gas: nearGas})
    const proofParams = {args: newAnswerParams, gas: nearGas}
    const creditParams = {args: userCreditParams, gas: nearGas}
    
    const response = await contract.add_answer_proof(proofParams);
    const credit = await contract.debit_balance(creditParams);

    console.log('newAnswerParams ->', newAnswerParams)
    console.log('creditParams ->', creditParams)
    console.log('response ->', response)
    console.log('response credit ->', credit)
    //const nft_metadata = await contract.nft_metadata();

    res.status(200).json({data: response, success: true});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
