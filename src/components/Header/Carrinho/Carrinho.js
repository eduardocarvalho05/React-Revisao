import { styled } from "styled-components";
import ImgCarro from '../../../assets-img/Logo/carrinho_de_compras.svg';
import { ColorPaint } from '../../Styled/ColorPaint';
import CardProduct from "./Cardproduct/Cardproduct";
import { useState } from "react";

export const Car = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
        img{
            width: 100%;
            height: 100%;
        }

        &:active{
            transform: scale(.97);
        }

        span{
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: black;
          left: -10px;
          top: -5px;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
`;

export const ContainerCarrinho = styled.div`
  width: 20%;
  position: absolute;
  top: 15vh;
  right: 0;
  height: 0px;
  border-bottom-left-radius: 8px;
  background-color: ${ColorPaint[1].Dark_Gray};
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 400ms;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

        & button{
            visibility: hidden;
            opacity: 0;
            height: 400px;
        }

        ul{
          width: 100%;
          max-height: 85%;
          overflow-x: hidden;
          overflow-y: scroll;
          display: flex;
          gap: 20px;
          flex-direction: column;
          align-items: center;
          padding: 10px;  

          &::-webkit-scrollbar{
          width: 10px;
          background-color: gray;
        }

        &::-webkit-scrollbar-thumb{
          background-color: #F1F1f1;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

            li{
              width: 90%;
              border-radius: 6px;
              border: 3px solid black;
              box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);

             -webkit-box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);

             -moz-box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);
             cursor: pointer;

                &:active{
                    transform: scale(.97);
                }
            }

            
        }

        &.active{
          visibility: visible;
          opacity: 1;
          height: 400px;

          & button{
            visibility: visible ;
            opacity: 1;
            width: 80%;
            height: 40px;
            border: 1px solid black;
            background-color: transparent;
            position: absolute;
            bottom: 10px;
            border-radius: 8px;
            cursor: pointer;
            color: white;
            font-weight: 700;

            &:hover{
                background-color: ${ColorPaint[0].Sobreposicao};
                color: black;
            }
        }
        }

        
        
        @media only screen and (max-width: 480px){
                width: 100%;
                
                &.active{
                    height: calc(100vh - 15vh);
                }

                & button{
                    bottom: 25px;
                }
            }
        @media only screen and (min-width: 480px) and (max-width:768px){
            width: 60%;
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
            width: 45%;
            
            &.active{
                height: 70vh;
            }
        }

        @media only screen and (min-width: 1024px) {
            width: 60%;

            &.active{
           visibility: visible;
           opacity: 1;
           height: 70vh;
        }
        }
`;

const Carrinho = ({ cart, setCart }) => {
    const [abreCarro, setAbreCarro] = useState(false)

    const abreCarrinho = () => {
        setAbreCarro(!abreCarro)
    }

    const lista = cart.map((item) =>
        <li key={item.id}>
            <CardProduct
                titulo={item.titulo}
                image={item.image}
                description={item.descricao}
                price={item.preco}
                setCart={setCart}
                cart={cart}
            />
        </li>
    )

    return (

        <>
            <Car onClick={abreCarrinho}>
                <img src={ImgCarro} alt="IMG Carro" />
                {cart.length > 0 ? <span>{cart.length}</span> : ""}
            </Car>

            <ContainerCarrinho className={abreCarro && "active"}>
                <ul>
                    {lista}
                </ul>
                <button>Prosseguir para compra!</button>
            </ContainerCarrinho>

        </>
    );
}

export default Carrinho;