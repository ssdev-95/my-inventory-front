import React from 'react'
import { Container, Table } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <button>
                <img src="drawable/add_icon.svg" alt="Add product" />
            </button>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Expirate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{'1. Salame'}</td>
                        <td>{550}</td>
                        <td>{'25/05/2021'}</td>
                        <td className="deleteButton">
                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Expirate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{'1. Salame'}</td>
                        <td>{550}</td>
                        <td>{'25/05/2021'}</td>
                        <td>
                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Expirate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{'1. Salame'}</td>
                        <td>{550}</td>
                        <td>{'25/05/2021'}</td>
                        <td>
                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}