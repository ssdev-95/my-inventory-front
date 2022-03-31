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

	& > form {
		height: 109%;
		width: 100%;

    display: grid;
	  grid-template-rows: repeat(4, 1fr);
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: "nane name name name" "date date . qtd" "cat cat cat cat" "act act act act";
		
		& > input {
			height: 2rem;
			
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

		& > div {
	    height: 2rem;
			display: flex;
	
			&.categories {
  			grid-area: cat;
			}

			&.actions {
				grid-area: act;
			}
		}
	}
`

export { ModalBase, Overlay }
