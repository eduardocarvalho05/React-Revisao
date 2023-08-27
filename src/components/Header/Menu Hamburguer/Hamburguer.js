import { styled } from "styled-components"
import { ColorPaint } from "../../Styled/ColorPaint"
import { useState } from "react"

export const Burguer = styled.div`
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
        span{
            width: 100%;
            height: 4px;
            border-radius: 8px;
            background-color: ${ColorPaint[0].Black};
            transform: all ease-in-out 100ms;
        }

        &:active{
            transform: scale(.97);
        }

        &.active{
            span{
                position: absolute;
                top: 50%;
                transform: translate(-50%);

                &:first-child{
                    transform: rotate(45deg);
                }

                &:last-child{
                    transform: rotate(-45deg);
                }

                &:nth-child(2){
                 visibility: hidden;
                 opacity: 0;
                 width: 0;
                }
            }
        }
`
export const ContainerBurguer = styled.div`
    width: 14%;
    position: absolute;
    top: 15vh;
    left: 0;
    height: 0;
    /* border-bottom-left-radius: 8px; */
    border-bottom-right-radius: 8px;
    background-color: ${ColorPaint[1].Dark_Gray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: all ease-in-out 400ms;

         ul{
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            a{
                font-size: 1.3rem;
                font-weight: 700;
                color: ${ColorPaint[0].Black};
                transform: all ease 200ms;
                &:hover{
                    color: ${ColorPaint[0].Tertiary_Color};
                }
            }
         }
         .botao{
            width: fit-content;
            display: flex;
            gap: 20px;
            justify-content: space-around;
         
         & button{
            width: 100px;
            height: 40px;
            border-radius: 8px;
            border: 2px solid black;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            transition: all ease 300ms;

            &:hover{
                background-color: ${ColorPaint[0].SuportColor};
            }
            &:active{
                transform: scale(.97);
            }
         }
         }
         &.active{
            visibility: visible;
            opacity: 1;
            height: 400px;
         }

         @media only screen and (max-width: 480px){
            width: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;

                ul{
                    width: 100%;
                    gap: 100px;
                    text-align: center;
                }

                &.active{
                    width: 100%;
                    height: calc(100vh - 15vh);
                }
         }

         @media only screen and (min-width: 480px) and (max-width: 768px){
            width: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;

                ul{
                    width: 100%;
                    gap: 100px;
                    text-align: center;
                }

                &.active{
                    width: 40%;
                    height: calc(100vh - 15vh);
                }
         }

         @media only screen and (min-width: 768px) and (max-width: 1024px){
            width: 0;

                &.active{
                    width: 40%;
                    height: calc(100vh - 15vh);
                }
         }

         @media only screen and (min-width: 1024px){
            width: 0;

           &.active{
                width: 20%;
                height: 50vh;
            }
         }
`

const Hamburguer = () => {

    const [abreBurguer, setAbreBurguer] = useState(false);

    return (
        <>
            <Burguer className={abreBurguer && "active"} onClick={() => setAbreBurguer(!abreBurguer)}>
                <span></span>
                <span></span>
                <span></span>
            </Burguer>

            <ContainerBurguer className={abreBurguer && "active"}>
                <ul>
                    <li><a href={"#!"}>Home</a></li>
                    <li><a href={"#!"}>Contact</a></li>
                    <li><a href={"#!"}>Products</a></li>
                    <li><a href={"#!"}>Meu Carrinho</a></li>
                </ul>

                <div className="botao">
                    <button>Login</button>
                    <button>Cadastre-se</button>
                </div>
            </ContainerBurguer >
        </>
    )
}

export default Hamburguer
