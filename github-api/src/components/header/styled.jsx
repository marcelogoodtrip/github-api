import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 4px;

    img {
        max-width: 50px;
    }

    input {
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 80%;
        height: 44px;
        padding: 4px;
        font-weight: 500;
    }

    button {
        background: linear-gradient(#7e3ff0,#532987);
        padding: 16px 24px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
 
        &: hover {
            background: linear-gradient(#532987,#2c1746);
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2); 
            border: 1px solid #ccc;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }
`;