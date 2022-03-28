import styled, { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
		box-sizing: border-box;
    font-family: -apple-system, Roboto, sans-serif;
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
	background-color: #0c0c0c;
	background-image: url(/public/icons/heavy_box.svg) no-repeat;

	& .login-button {
		background: #55f;
		border: 0;
		border-radius: 1rem;
		padding: 0.25rem 0.5rem;
	}

	& .close-button {
		padding: 0.2rem;
		background: transparent;
		color: red;
		border: 1px solid red;
		border-radius: 100%;
	}
`

export { GlobalCSS, HomeContainer }
