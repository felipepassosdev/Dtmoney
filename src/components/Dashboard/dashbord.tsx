import React from "react";
import { Container } from "./dashboard.styles";
import { Summary } from "../Summary/summary";
import TransactionsTable from "../TransactionsTable/transactionsTable";

export const Dashboard = () => {
    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    );
}
