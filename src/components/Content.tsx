import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { Section } from '../components/Section';
import React, { useContext, useEffect } from 'react';

export function Content(props) {
    const {Products, deleteProduct} = useContext(AddProductModalContext)

    const innerHTMLContainer = (item) => {
        let tr = document.createElement('tr')
        const child = (`
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.expiration}</td>
            <td onClick={${deleteProduct(item.id)}}>
                <img src="drawable/minus.svg" alt="Delete button"/>
            </td>
        `)

        tr.innerHTML = child

        return tr
    }

    useEffect(()=>{
        Products!=null && (
            Products.forEach(product => {
                const { category } = product
                //console.log(product)
                let ele = document
                    .querySelector(`#${category}-table tbody`)
                ele.appendChild(innerHTMLContainer(product))
                //console.log(ele)
            })
        )
    }, [Products])

    return (
        <div className={props.className}>
            <Section className='food' />
            <Section className='hygiene' />
            <Section className='cleaning' />
        </div>
    )
}