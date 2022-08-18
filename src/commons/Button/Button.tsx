import React from "react";
import {PrimaryButton} from './Button.styles';


interface Props {
    text: string
    onClick?: (arg:any) => void
}


export const Button = ({text, onClick}: Props) => (
    <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
)
