import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { Section } from '../components/Section';
import { useContext, useEffect } from 'react';

export function Content(props) {
    const {Products} = useContext(AddProductModalContext)

    useEffect(()=>{
        Products!=null && (
            Products.forEach(product=>{
                console.log(product)
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