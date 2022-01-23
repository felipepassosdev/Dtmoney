import styled from 'styled-components'

export const Container = styled.header`
    background: var(--black);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1em 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background-color: var(--black-light);
        border: 0.1rem;
        border-style: solid;
        border-color: var(--blue-light);
        padding: 0 2rem;
        border-radius: 0.25;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;