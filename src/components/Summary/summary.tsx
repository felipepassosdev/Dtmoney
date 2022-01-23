import React from "react";
import { Container } from "./summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas"></img>
                </header>
                <strong> -R$500,00</strong>
            </div>
            <div className="total-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"></img>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}