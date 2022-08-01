import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount =  styled.div `
    display: flex;
    align-items: center;
`;

export const WrapperUsername =  styled.div `
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
`;

export const WrapperInfoUser =  styled.div `
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-left: 8px
`;

export const WrapperImage =  styled.img `
    border-radius: 50%;
    max-width: 30%;
    margin: 8px; 
`;