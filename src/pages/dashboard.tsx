import type { NextPage } from "next"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Products } from "../components/products"

import { DashboardContainer } from "../globals"

const Dashboard: NextPage = () => {
  return (
	  <DashboardContainer>
		  <Header />
			<Products />
			<Footer />
		</DashboardContainer>
	)

	//return (<p>Dashboard</p>)
}

export default Dashboard;
