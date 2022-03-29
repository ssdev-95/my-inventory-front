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
	position: relative;

	& > img {
		height: 60%;
		width: auto;
	}

	&.active {
		&:after {
			content: "";

			width: 100%;
			height: 100%;

			border-radius: 100% 100% 0 0;
			background: #f0f2f5;

			position: absolute;
			left: 0;
			bottom: 0;
		}

		& > img {
			filter: invert(100%);
			z-index: 3;
		}
	}
`

export { Base }
