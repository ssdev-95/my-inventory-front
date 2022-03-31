import styled from "styled-components"

interface OverlayProps {
	[key: string]: any;
}

const Overlay = styled.div<OverlayProps>`
  width: 100vw;
	height: 100vh;

	display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;

	background: rgba(0,0,0, 0.8);
`

const ModalBase = styled.div`
  max-width: 100vw;
	max-height: 100vh;
	padding: 1rem;

  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 2rem;
	background: #f0f2f5;

	border-radius: 1rem;
`
const Form = styled.form`
  height: 109%;
	width: 100%;
  display: grid;
	gap: 1.5rem;
  grid-template-rows: repeat(4, 1fr);
	grid-template-columns: repeat(4, 1fr);
	grid-template-areas: "name name name name"
	                     "date date . qtd"
											 "cat cat cat cat"
											 "cancel . . submit";
		
	& > input {
		height: 2rem;
		color: #0c0c0c;
		border-radius: 0.3125rem;
		background: transparent;

		padding-left: 0.25rem;

		&:first-of-type {
		  grid-area: name;
		}

		&:nth-of-type(2) {
			grid-area: date;
		}

	  &:nth-of-type(3) {
			grid-area:qtd;
		}
	}

	& > select {
		height: 2rem;
		grid-area: cat;
		color: #0c0c0c;
		border-radius: 0.3125rem;
		background: transparent;
	}
	
 
	& > button {
		height: 2rem;
		background: none;
		widtth: 40%;
		border-radius: 0.3125rem;
		border: 1px solid red;
  	color: red;
		grid-area: cancel;

		&[type=submit] {
			color: green;
			border: 1px solid green;
			grid-area: submit;
		}
	}
`

export { ModalBase, Overlay, Form }
