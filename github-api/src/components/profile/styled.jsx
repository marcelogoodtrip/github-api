import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
    margin: 32px;
`;

export const WrapperStatusCount =  styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    div {
        margin: 8px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
    }
`;

export const WrapperUserGeneric =  styled.div `
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }
    a {
        color: dodgerblue;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const WrapperInfoUser =  styled.div `
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: 250px;
    margin-left: 64px;
    h1 {
        font-size: 32px;
        font-weight: bold;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperImage =  styled.img `
    border-radius: 50%;
    max-width: 200px;
    margin: 8px; 
`;