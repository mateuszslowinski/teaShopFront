import React from "react";
import {PrimaryButton} from './Button.styles';


interface Props {
    text: string
    onClick?: (arg:any) => void
    disabled?:boolean
}


export const Button = ({text, onClick,disabled}: Props) => (
    <PrimaryButton onClick={onClick} disabled={disabled}>{text}</PrimaryButton>
)
