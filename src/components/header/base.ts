import styled from "styled-components"

const Base = styled.header`
  width: 1240px;
	max-width: 100vw;
	height: 12vh;
	padding: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > img {
		height: 70%;
		width: auto;
	}

	& > .add-button {
		height: 40px;
		width: 40px;

		background: transparent;
		border: 2px solid #04AA79;
		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		& > span {
			font-weight: 700;
			font-size: 1.45rem;
			line-height: 1.45rem;
			color: #04AA79;
		}
	}

	& div {
		height: 100%;
		display: flex;
		align-items: center;
		gap: 1.35rem;

		position: relative;
	
		p {
	  	font-size: 1.45rem;
			z-index: 5;
			
			@media(max-width:720px) {
				display: none;
			}
		}

		img {
			border-radius: 100%;
			height: 70%;
			width: auto;
			z-index: 5;
		}

		&::after {
			content: "";

			height: calc(70% + 8px);
		  width: calc(100% + 8px);

			border-radius: 500px;

			background: #04AA79;
			position: absolute;
			z-index: 1;

			transform: translateX(-4px);

			@media(min-width: 1024px) {
				border-radius: 16px;
			}
		}
	}

	@media(max-width: 860px) {
		height: 8vh;
		padding: 0.5rem 2rem;
	}
`

export { Base }
