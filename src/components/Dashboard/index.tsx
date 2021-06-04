import React, { useContext} from 'react'
import { useRouter } from 'next/router'
 
import { AddProductModalContext } from '@/contexts/AddProductModalContext'
import { EditModalContext } from '@/contexts/EditModalContext'

import { Controller } from '@/services/db/DBController'

import { DashboardProps } from '@/types'
import { formatDate } from '@/services/utils/formats'

import { Container, Table, Section } from '@/components/Dashboard/styles'

export default function Dashboard({ products }: DashboardProps) {
    const { toggleModal } = useContext(AddProductModalContext)
    const { toggleEditModal } = useContext(EditModalContext)

    const router = useRouter();

    const deleteProduct = async (id:string) => {
        await Controller.delete(id);

        router.push('/');
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