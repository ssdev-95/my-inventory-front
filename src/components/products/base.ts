import styled from "styled-components"

const Base = styled.div`
  width: inherit;
	height: 76vh;

	border-radius: 0 0 50px 50px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	gap: 1.5rem;

	& > span {
		align-self: flex-start;
	}

	@media(max-width: 860px) {
		height: 84vh;
		padding: 2rem 2rem;
	}
`

const Table = styled.table`
  width: 400px;
	max-width: 95vw;


	tbody, thead {
		width: 100%;
	}
`

const Row = styled.tr`
  width: 100%;

	td, th {
		flex: 1;
		text-align: center;
	}
`

export { Base, Table, Row }
