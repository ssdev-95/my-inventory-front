import styled, { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
		box-sizing: border-box;
    font-family: -apple-system, Roboto, sans-serif;
		color: #f0f2f5;
  }

  a {
    text-decoration: none;
  }
`

const HomeContainer = styled.main`
  height: 100vh;
	width: 100vw;

  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-image: url("/public/icons/heavy_box.svg") no-repeat;
	background-color: #0c0c0c;

	& .login-button {
		background: #55f;
		border: 0;
		border-radius: 6px;
		width: 12rem;
		height: 3rem;

		font-size: 1.2rem;
		font-weight: medium;
	}

	& .close-button {
		height: 2rem;
		width: 2rem;
		background: transparent;
		color: red;
		border: 1px solid red;
		border-radius: 100%;
	}
`

const DashboardContainer = styled.main`
  height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #0c0c0c;
 `

export { GlobalCSS, HomeContainer, DashboardContainer }
