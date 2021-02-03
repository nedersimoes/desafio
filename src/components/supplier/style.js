import styled from 'styled-components'

export const DivSupplier = styled.div`
    margin: 24px 12px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    border: 1px solid steelblue;
    padding: 8px;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
`;

export const Div1 = styled.div`
    h3 {
        color: rgba(128, 128, 128, 0.555);
    font-size: 16px;
    font-weight: 200;
    }
`;

export const DivRow = styled.div`
    flex-direction: row;
    display: flex;
    font-weight: 500;
    color: rgb(0, 119, 255);
`;

export const DivCode = styled.div`
    background-color: lightblue;
    color: gray;
    margin-left: 8px;
    padding: 2px;
    border-radius: 12px;
`;