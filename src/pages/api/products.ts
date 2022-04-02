import { NextApiRequest, NextApiResponse } from "next"
import nookies from "nookies"

import { api } from "../../services/api"

export default async function (
	req:NextApiRequest, res: NextApiResponse
){
  try {
		const endpoint = process.env.API_ENDPOINT as string;
	  const token = nookies.get({ req })["@my_inventory:api_token"]

		const res = await api.get(`${endpoint}products`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		const products = res?.data?.products
		console.log(products)

  	if (!products?.length) {
  	  return res.status(404).json({ products: [] })
		}

  	return res.status(200).json({ products })
	} catch(err) {
		console.log(err)
		return res.status(500).end("Deu ruim T.T")
	}
}
