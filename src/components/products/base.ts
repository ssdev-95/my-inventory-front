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
`

const THead = styled.thead`
	height: 3rem;
	width: 100%;

	position: relative;

	&::after {
		content: "";

		width: 100%;
		height: 2px;

		background: #04AA79;

		position: absolute;
		bottom: 0;
	}
		
	& > tr {
		margin: auto 0;
	}
`

const TBody = styled.tbody`
	width: 100%;

	& > tr {
		padding: 0.5rem;
		border-radius: 0.375rem;
		margin: 1.25rem auto 0;

		&:hover {
			box-shadow: 2px 2px 8px 0 #04AA79;
		}
	}
`

const Row = styled.tr`
  width: 100%;
	display: flex;

	td, th {
		flex: 1;
		text-align: center;

		&:first-of-type {
			text-align: left;
			border-radius: 0.375rem 0 0 0.375rem;
		}

		&:last-of-type {
			text-align: right;
			border-radius: 0 0.375rem 0.375rem 0;
		}
	}
`

export { Base, Table, THead, TBody, Row }
