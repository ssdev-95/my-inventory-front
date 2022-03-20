import  { ButtonHTMLAttributes } from 'react'

type CButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function CButton({ children, ...props}: CButtonProps) {

    return (
        <button {...props}>{children}</button>
    )
}