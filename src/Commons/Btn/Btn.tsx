import React from "react";
import {PrimaryButton} from './Btn.styles';


interface Props {
    text: string
    onClick?: (arg:any) => void
    disabled?:boolean
}


export const Btn = ({text, onClick,disabled}: Props) => (
    <PrimaryButton onClick={onClick} disabled={disabled}>{text}</PrimaryButton>
)
