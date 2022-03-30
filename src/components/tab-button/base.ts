import styled from "styled-components"

const Base = styled.button`
  height: 100%;
	padding: 0.25rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background: transparent;
	border: 0;

	flex: 1;

	& > img {
		height: 60%;
		width: auto;
	}

	&.active {
		background: url("/icons/drop.svg") no-repeat;
		background-position-x: center;
		background-size: cover;

		& > img {
			filter: invert(100%);
			z-index: 3;
		}
	}
`

export { Base }
