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
`

export { ModalBase, Overlay }
