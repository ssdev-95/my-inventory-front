import { api } from "services/api"
import { IProduct } from "types"

type AddProps = {
	body: IProduct;
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

const updateProduct = async ({
	body, endpoint, token
}: AddProps) => {
	const res = await api.put(
		endpoint, body, params(token)
  )

	console.log(res?.data)
	return res?.data?.success;
}

const getProducts = async ({
	endpoint, token
}: GetProps) => {
	const res = await api.get(endpoint, params(token))
	return res?.data?.products;
}

const deleteProduct = async ({
	endpoint, token
}: GetProps) => {
	const res = await api.delete(endpoint, params(token))
	return res?.data?.success;
}

export {
	addProduct, getProducts, deleteProduct, updateProduct
}
