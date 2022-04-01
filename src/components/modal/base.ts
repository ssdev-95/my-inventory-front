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

	z-index: 9;
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

	border-radius: 0.3125rem;

	&.form {
		width: 600px;
	}
`
const Form = styled.form`
  height: 109%;
	width: 100%;
  display: grid;
	gap: 1.5rem;
  grid-template-rows: repeat(4, 1fr);
	grid-template-columns: repeat(4, 1fr);
	grid-template-areas: "name name name name"
	                     "date date qtd qtd"
											 "cat cat cat cat"
											 "cancel cancel submit submit";
		
	& > fieldset {
		background: transparent;
		border: 1px solid #0c0c0c;
		border-radius: 0.3125rem;

		& > legend {
			color: #0c0c0c;
			font-weight: 400;
			padding: 0 4px;
		}

		&:first-of-type {
		  grid-area: name;
		}

		&:nth-of-type(2) {
			grid-area: date;
		}

	  &:nth-of-type(3) {
			grid-area:qtd;
		}

		&:last-of-type {
			grid-area: cat;
		}

		& > input {
			height: 2rem;
			padding: 0 4px;
			width: 100%;
			background: transparent;
			color: #0c0c0c;
			outline-color: transparent;
			border: 0;

			&:focus {
				outline:none;
			}
		}

  	& > select {
			width: 100%;
			height: 100%;
  		color: #0c0c0c;
			border: 0;
  		background: transparent;

			&:focus {
				outline:none;
			}
		}
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
