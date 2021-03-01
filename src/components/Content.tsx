import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { Section } from '../components/Section';
import { useContext, useEffect } from 'react';

export function Content(props) {
    const {Products} = useContext(AddProductModalContext)

    const innerHTMLContainer = (item) => {
        let tr = document.createElement('tr')
        tr.innerHTML = (`
            <td>${item.productName}</td>
            <td>${item.productQuantity}</td>
            <td>${item.productExpiration}</td>
            <td>
                <img src="drawable/minus.svg" alt="Delete button"/>
            </td>
        `)

        return tr
    }

    useEffect(()=>{
        Products!=null && (
            /*Products.forEach(product => {
                console.log(product)
            })*/
            console.log(Products)
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