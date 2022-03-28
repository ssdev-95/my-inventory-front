import styled from "styled-components"

const Base = styled.header`
  width: 1240px;
	max-width: 100vw;
	height: 15vh;
	padding: 0.25rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > img {
		height: 78%;
		width: auto;
		border-radius: 100%;
	}

	& > p {
		font-size: 1.45rem;
	}
`

export { Base }
