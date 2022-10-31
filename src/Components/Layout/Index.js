import React from 'react'
import { Header } from "../Header/Index";
import { SubHeader } from "../SubHeader/Index";
import { Content } from "../Content/Index";
import { Container, Wrapper } from "./styles";

export const Layout = () => {
  return (
    <Container>
        <Header />
        <Wrapper>
            <SubHeader />
            <Content />
        </Wrapper>
    </Container>
  )
}
