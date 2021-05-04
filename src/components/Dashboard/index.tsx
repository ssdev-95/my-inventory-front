import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
 
import { AddProductModalContext } from '@/contexts/AddProductModalContext'
import { EditModalContext } from '@/contexts/EditModalContext'

import { Container, Table, Section } from './styles'

interface Product {
    id: string;
    name: string;
    quantity: number;
    expiration: string;
    category: string;
}

interface DashboardProps {
    products: Product[];
}

export default function Dashboard({ products }: DashboardProps) {
    const { toggleModal } = useContext(AddProductModalContext)
    const { toggleEditModal } = useContext(EditModalContext)
    const router = useRouter()

    const deleteProduct = async (id:String) => {
        await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        router.push('/')
    }

    const formatDate =(date:string) => {
        return date.split('-').reverse().join('/')
    }

    return (
        <Container>
            <button onClick={toggleModal}>
                <img src="drawable/add_icon.svg" alt="Add product" />
            </button>
            <Section>
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
                            products.map(product => {
                                if (product.category === 'food') {
                                    return (
                                        <tr key={product.id}>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.name}</td>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.quantity}</td>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{formatDate(product.expiration)}</td>
                                            <td
                                              className="deleteButton"
                                              onClick={()=>deleteProduct(product.id)}
                                            >
                                                <img
                                                  src="drawable/trash.svg"
                                                  alt="Delete button icon"
                                                />
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
            </Section>

            <Section>
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
                            products.map(product => {
                                if (product.category === 'hygiene') {
                                    return (
                                        <tr key={product.id}>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.name}</td>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.quantity}</td>
                                            <td
                                              onClick={()=>deleteProduct(product.id)}
                                            >{formatDate(product.expiration)}</td>
                                            <td
                                              onClick={()=>deleteProduct(product.id)}
                                              className="deleteButton"
                                            >
                                                <img src="drawable/trash.svg" alt="Delete button icon" />
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
            </Section>
            
            <Section>
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
                            products.map(product => {
                                if (product.category === 'cleaning') {
                                    return (
                                        <tr key={product.id}>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.name}</td>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{product.quantity}</td>
                                            <td
                                              onClick={()=>toggleEditModal(product)}
                                            >{formatDate(product.expiration)}</td>
                                            <td
                                              onClick={()=>deleteProduct(product.id)}
                                              className="deleteButton">
                                                <img src="drawable/trash.svg" alt="Delete button icon" />
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
            </Section>
        </Container>
    )
}