import {ReactNode} from "react"
import {LayoutContainer, PageContainer} from "../../constants/Layouts/PageContainer.styles"

interface Props {
    header: ReactNode
    content: ReactNode
    footer: ReactNode
}

export const Layout = ({header, content, footer}: Props) => (
    <LayoutContainer>
        <div>{header}</div>
        <PageContainer>{content}</PageContainer>
        <div>{footer}</div>
    </LayoutContainer>

)