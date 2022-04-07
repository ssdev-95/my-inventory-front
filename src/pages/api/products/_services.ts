import { api } from "services/api"

type AddProps = {
	body: any;
	endpoint: string;
	token: string;
}

type GetProps = Omit<AddProps, "body">

const params = (token:string) => ({
	headers: {
		Authorization: `Bearer ${token}`
	}
})

const addProduct = async ({
  body, endpoint, token
}: AddProps) => {
	const res = await api.post(
		endpoint, body, params(token)
  )

	return res?.data?.product;
}

const getProducts = async ({
	endpoint, token
}: GetProps) => {
	const res = await api.get(endpoint, params(token))

	return res?.data?.products;
}

export { addProduct, getProducts }
