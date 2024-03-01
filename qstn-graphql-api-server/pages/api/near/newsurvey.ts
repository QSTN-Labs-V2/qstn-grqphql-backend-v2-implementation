import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
import { formatNearAmount, parseNearAmount } from "../../../lib/near.utils";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { surveyId, balance, prize } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
      return res.status(204).end();

    if (!surveyId || !balance) {
      throw new Error('No survey and/or balance provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No survey and/or balance provided' || 'An error occurred',
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
    
    const newSurveyParams = {
      name: `qstnsry${surveyId}`,
      cid: CID, 
      balance: balance
    }

    const contract = await nearContract({
        contractId: "surveyv12-testnet.qstn-alpha.testnet",
        account: account,
        viewMethods: [],
        changeMethods: ["create_factory_subaccount_and_deploy"]
    });

  try {
    //console.log('nearConnection', nearConnection);
    console.log('account -> ', account);
    console.log('contract -> ', contract);
    //console.log('account_details', account_details);
    //console.log('account_state', account_state);
    console.log('balance -> ', formatNearAmount(accountBalance?.total));
    
    //console.log('contract', contract);
    const nearGas = String(80000000000000);
    const nearAmount = parseNearAmount(String(1.5)) // amount in yoctoNEAR;
    const nearCostBalance = parseNearAmount(String(0.01)) // amount in yoctoNEAR;
    console.log('Params ->', {args: newSurveyParams, gas: nearGas, amount: nearAmount})
    const contractParams = {args: newSurveyParams, gas: nearGas, amount: nearAmount}
    const response = await contract.create_factory_subaccount_and_deploy(contractParams);
    console.log('newSurveyParams ->', newSurveyParams)
    console.log('response ->', response)
    //send costs balance to survey contract
    await account.sendMoney(
      `qstnsry${surveyId}.surveyv12-testnet.qstn-alpha.testnet`, // receiver account
      nearCostBalance // amount in yoctoNEAR
    );

    //res.status(200).json({data: response, success: true});

    res.status(200).json({data: { 
      success: true, 
      contractAddress: `qstnsry${surveyId}.surveyv12-testnet.qstn-alpha.testnet`,
      ownerAddress: account?.accountId
    }});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
