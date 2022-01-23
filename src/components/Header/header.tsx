import React from "react";
import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./header.styles";

interface HeaderProps {
    onOpenTransactionModal: () => void;
}

export const Header = ({onOpenTransactionModal}: HeaderProps ) => {
    return ( 
    <Container>
        <Content>
            <img src={logoImg} alt="logo"/>
            <button type="button" onClick={onOpenTransactionModal}>
                Nova transação
            </button>
            
        </Content>
    </Container> );
}
