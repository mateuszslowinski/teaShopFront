import React from "react";
// @ts-ignore
import {PrimaryButton} from './Button.styles';


interface Props {
    text: string
}


export const Button = ({text}: Props) => (
    <PrimaryButton>{text}</PrimaryButton>
)
