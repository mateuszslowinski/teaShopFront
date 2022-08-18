import React from "react";
import {PrimaryButton} from './Button.styles';


interface Props {
    text: string
}


export const Button = ({text}: Props) => (
    <PrimaryButton>{text}</PrimaryButton>
)
