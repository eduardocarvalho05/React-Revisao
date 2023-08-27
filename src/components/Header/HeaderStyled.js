import { styled } from "styled-components";
import { ColorPaint } from "../Styled/ColorPaint";

export const Cabecalho = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: ${ColorPaint[1].Dark_Gray_3};
    position: relative;


    @media only screen and (max-width: 480px){
        padding: 0 10px;
    }
`;