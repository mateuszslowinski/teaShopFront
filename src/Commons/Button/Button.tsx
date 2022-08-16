import React from "react";
import {PrimaryButton} from "./Button.style";

interface Props {
    text: string
}


export const Button = ({text}: Props) => (
    <PrimaryButton>{text}</PrimaryButton>
)
