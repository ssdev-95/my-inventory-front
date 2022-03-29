import styled from "styled-components"

const ButtonBase = styled.button`
  width: 12rem;
	height: 3rem;
	padding: 0.25rem 0.5rem;

	background: ${(props:any)=>props.background};

	font-size: 1.2rem;
	font-weight: medium;

	border-radius: 6px;
	border: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > img {
		filter: invert(100%);
		height: 80%;
		width: auto;
	}
`

export { ButtonBase }
