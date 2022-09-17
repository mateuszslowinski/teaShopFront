import React from "react";
import {MessageContainer} from "./Message.styles";

interface Props {
    text: string
}

export const Message = ({text}: Props) => (
    <MessageContainer>
        <p>{text}</p>
    </MessageContainer>
)
