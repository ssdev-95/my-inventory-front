import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
		box-sizing: border-box;
    font-family: -apple-system, Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }


	body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		background: #5f5f5f;

		.signout {
			padding: 0.25rem;
			color: red;
			border: 1px solid red;
			border-radius: 100px;
			background: transparent;
		}
	}
`
