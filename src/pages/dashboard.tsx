import { useEffect, useState } from "react"
import type { NextPage, GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { api } from "../services/api"
import { useProduct } from "../contexts"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Products } from "../components/products"
import { ResisterProductModal } from "../components/modal/register-modal"

import { IProduct } from "../types"
import { DashboardContainer } from "../globals"

const Dashboard: NextPage = () => {
  const { setProducts } = useProduct()
	const [isOpen, setIsOpen] = useState(false)

	async function getProducts() {
	  const res = await api.get("/products")
		  .catch((err)=>alert(err))

		setProducts(res?.data?.products??[])
	}

	function toggleModal() {
	  setIsOpen(prev=>!prev)
	}

  useEffect(()=>{
	  getProducts()
  }, [])

  return (
	  <DashboardContainer>
		  <Header toggle={toggleModal} />
			<Products	/>
			<Footer />
			<ResisterProductModal
			  isOpen={isOpen}
				toggle={toggleModal}
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
