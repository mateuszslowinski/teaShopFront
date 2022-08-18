import { PageContainer } from "../../constants/Layouts/PageContainer.styles"

interface Props {
    header: any
    content: any
    footer: any
}

export const Layout = ({header, content, footer}: Props) => (
    <>
        <div>{header}</div>
        <PageContainer>{content}</PageContainer>
        <div>{footer}</div>
    </>

)