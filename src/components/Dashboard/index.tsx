import React from 'react'
import { Container, Table } from './styles'

interface Product {
    id: string;
    name: string;
    quantity: number;
    expiration: number;
    category: string;
}

interface DashboardProps {
    products: Product[];
}

export default function Dashboard({ products }: DashboardProps) {
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
                    {
                        products.map(product=>{
                            if(product.category==='food') {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.expiration}</td>
                                        <td className="deleteButton">
                                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
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
                    {
                        products.map(product=>{
                            if(product.category==='hygiene') {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.expiration}</td>
                                        <td className="deleteButton">
                                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
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
                    {
                        products.map(product=>{
                            if(product.category==='cleaning') {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.expiration}</td>
                                        <td className="deleteButton">
                                            <img src="drawable/trash.svg" alt="Delete button icon"/>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}