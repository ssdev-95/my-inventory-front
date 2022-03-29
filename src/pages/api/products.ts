import { NextApiRequest, NextApiResponse } from "next"
import fs from 'fs'
import path from 'path'

const uri = path.join(process.cwd(), 'public/mock.json')
export default function (req:NextApiRequest, res: NextApiResponse){
	const token = req.headers.cookie
  //console.log(token)

	try {
		const file = fs.readFileSync(uri) as string
  	const json = JSON.parse(file)
  	console.log("json: \n", json)

  	/*if (!products.length) {
  	  return res.status(404).end("No data found")
  	}*/

  	return res.status(200).json({ products: file })
	} catch {
		return res.status(500).end("Deu ruim T.T")
	}
}
