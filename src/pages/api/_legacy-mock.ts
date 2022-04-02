import { NextApiRequest, NextApiResponse } from "next"
import fs from 'fs'
import path from 'path'

const uri = path.join(process.cwd(), 'public/mock.json')
export default function (req:NextApiRequest, res: NextApiResponse){
  try {
		const file = fs.readFileSync(uri) as string
  	const { products } = JSON.parse(file)

  	if (!products.length) {
  	  return res.status(404).end("No data found")
  	}

  	return res.status(200).json({ products })
	} catch(err) {
		console.log(err)
		return res.status(500).end("Deu ruim T.T")
	}
}
