import { NextApiRequest, NextApiResponse } from "next"

export default function (req:NextApiRequest, res: NextApiResponse){
	const token = req.headers.cookie
	console.log(token)
	return res.status(200).end("Ok")
}
