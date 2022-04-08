import { useEffect, useState } from "react"
import type { NextPage, GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { api } from "../services/api"
import { useProduct } from "../contexts"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Products } from "../components/products"
import { RegisterProductModal } from "../components/modal/register-modal"
import { UpdateProductModal } from "../components/modal/update-modal"

import { IProduct } from "../types"
import { DashboardContainer } from "../globals"

const Dashboard: NextPage = () => {
  const { setProducts } = useProduct()
	const [addProductModalOpen, setAddProductModalOpen] = useState(false)
	const [updateProductModalOpen, setUpdateProductModalOpen] = useState(false)

	async function getProducts() {
	  const res = await api.get("/products")
		  .catch((err)=>alert(err))

		setProducts(res?.data?.products??[])
	}

	function toggleAddProductModal() {
	  setAddProductModalOpen(prev=>!prev)
	}

	function toggleUpdateProductModal() {
	  setUpdateProductModalOpen(prev=>!prev)
  }

  useEffect(()=>{
	  getProducts()
  }, [])

  return (
	  <DashboardContainer>
		  <Header toggle={toggleAddProductModal} />
			<Products handler={toggleUpdateProductModal}	/>
			<Footer />
			<RegisterProductModal
			  isOpen={addProductModalOpen}
				toggle={toggleAddProductModal}
			/>
			<UpdateProductModal
			  isOpen={updateProductModalOpen}
				toggle={toggleUpdateProductModal}              
			/>
		</DashboardContainer>
	)
}

export const getServerSideProps:GetServerSideProps = async ({ req }) => {
   const session = await getSession({ req })
	 if (!session) {
	   return {
		   redirect: {
			   destination: "/",
				 permanent: false
			 }
		 }
	 }

	 return { props:{} }
}

export default Dashboard;
