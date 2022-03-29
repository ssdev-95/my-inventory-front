import styled from "styled-components"

const Base = styled.header`
  width: 1240px;
	max-width: 100vw;
	height: 12vh;
	padding: 0.25rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > img {
		height: 70%;
		width: auto;
	}

	& div {
		height: 100%;
		display: flex;
		align-items: center;
		gap: 1.35rem;
	
		p {
	  	font-size: 1.45rem;
			
			@media(max-width:720px) {
				display: none;
			}
		}

		img {
			border-radius: 100%;
			height: 70%;
			width: auto;
		}
	}
`

export { Base }
