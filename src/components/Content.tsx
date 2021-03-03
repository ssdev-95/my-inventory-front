import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { Section } from '../components/Section';
import React, { useState, useContext, useEffect } from 'react';

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

    const [storedItems, setStoredItems] = useState(null)

    useEffect(() => {
        if(Products.length>0) {
            localStorage.setItem('@app/products',JSON.stringify(Products))
        }
        setStoredItems(JSON.parse(localStorage.getItem('@app/products')))
    }, [Products])


    useEffect(()=>{
        (storedItems!==null&&storedItems.length>0) && (
            storedItems.forEach(item => {
                const { category } = item
                //console.log(item)
                let ele = document
                    .querySelector(`#${category}-table tbody`)
                ele.appendChild(innerHTMLContainer(item))
                //console.log(ele)
            })
        )
    }, [storedItems])

    return (
        <div className={props.className}>
            <Section className='food' />
            <Section className='hygiene' />
            <Section className='cleaning' />
        </div>
    )
}