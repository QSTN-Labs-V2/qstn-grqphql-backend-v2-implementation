import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto';

// Generate a key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});


function encode(data: string, publicKey: string): Buffer {
  const buffer = Buffer.from(data, 'utf-8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted;
}

function decode(data: Buffer, privateKey: string): string {
  const decrypted = crypto.privateDecrypt(privateKey, data);
  const decoded = decrypted.toString('utf-8');
  return decoded;
}

// Function to generate a signature for a given data string
function generateSignature(data: any, privateKey: string): string {
  const sign = crypto.createSign('SHA256');
  sign.write(data);
  sign.end();
  return sign.sign(privateKey, 'base64');
}

// Function to verify the signature of a given data string
function verifySignature(data: any, signature: string): boolean {
  const verify = crypto.createVerify('SHA256');
  verify.write(data);
  verify.end();
  return verify.verify(publicKey, signature, 'base64');
}

function generateProof(data: any): string {
  return data.toString();
}


const handler = (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
    return res.status(204).end();

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }

  const { surveyId, answers } = req.body;

  try {
    const dataEncoded = encode(answers, publicKey)
    const signature = generateSignature(dataEncoded,privateKey)
    const verifySign = verifySignature(dataEncoded, signature)
    const proof = generateProof(dataEncoded);
    //const decoded = decode(Buffer.from(proof, 'base64') as Buffer, privateKey)

    res.status(200).json({success: true, surveyId, signature, proof, verifySign });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
