import styled from "styled-components"

const Base = styled.button`
	padding: 0.25rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background: transparent;
	border: 0;

	flex: 1;

	&.active {
		background: #0c0c0c;
	}
`

export { Base }
