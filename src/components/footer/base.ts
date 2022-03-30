import styled from "styled-components"

const Base = styled.footer`
  width: 1240px;
	max-width: 100vw;
	height: 12vh;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media(max-width: 860px) {
		height: 8vh;
	}
`

export { Base }
