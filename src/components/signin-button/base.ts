import styled from "styled-components"

export const ButtonBase = styled.button`
  width: 15rem;
	height: 2.5rem;
	padding: 0.2rem 0.5rem;

	color: ${(props:any)=>props.color}};
	background: ${(props:any)=>props.background};

	border-radius: 6px;
	border: 0;

	displa: flex;
	align-items: center;
	justify-content: space-between;

	& > img {
		filter: invert(100%);
		height: 100%;
		width: auto;
	}
`
