import { NextApiRequest, NextApiResponse } from "next"
import nookies from "nookies"

import { addProduct, getProducts } from "./_services"

const endpoint = `${process.env.API_ENDPOINT}products`
export default async function (
	req:NextApiRequest, res: NextApiResponse
){
	const token = nookies.get({ req })["@my_inventory:api_token"]
  try {
		switch(req.method) {
			case "GET":
    		const products = await getProducts({
    			endpoint, token
    		})

      	return res.status(200).json({ products })
			case "POST":
				const { body } = req
				const product = await addProduct({
				  endpoint, body,	token
			  })

			  return res.status(200).json({ product })
			default:
				return res.status(666).end("Not allowed")
		}
	} catch(err) {
		console.log(err)
		return res.status(500).end("Deu ruim T.T")
	}
}
