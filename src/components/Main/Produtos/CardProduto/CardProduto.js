import { styled } from "styled-components"
import React from 'react'
import imagemCar from "../../../../assets-img/Logo/carrinho_de_compras.svg"

export const Prod = styled.div`
    width: 250px;
    height: 350px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    border-radius: 8px;

        & .imagemP{
            width: 100%;
            height: 50%;
            overflow: hidden;
            position: relative;

                span{
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    background-color: red;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: yellow;
                    border-radius: 50%;
                    top: 5px;
                    right: 10px;
                    transform: rotate(25deg);
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
        }


        .conteudo{
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 0 10px;
            h2{
                font-size: 1rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            }
    
            h5{
                font-size: 1rem;
                color: gray;
                font-style: italic;
            }
    
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 0.8rem;
            }
    
            h3{
                width: 100%;
                color: green;
                font-weight: bold;
                display: flex;
                gap: 20px;
                span{
                    color: red;
                    font-style: italic;
                    text-decoration: line-through;
                    opacity: .4;
                }
            }

            button{
                width: 80%;
                border-radius: 8px;
                outline: none;
                border: 1px solid black;
                background-color: transparent;
                height: 35px;
                cursor: pointer;

                    &:hover{
                        background-color:#f7b96d ;
                    }

                    &:active{
                        transform: scale(.97);
                    }
            }
            
    
            a{
                width: 35px;
                height: 35px;
                border: 1px dotted gray;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                bottom: 5px;
                right: 10px;
                border-radius: 8px;
                transition: all ease-in-out 100ms;
    
                    img{
                        width: 70%;
                        height: 70%;
                    }
    
                    &:hover{
                        transform: scale(1.1);
                    }
                    &:active{
                        transform: scale(.97);
                    }
            }

        }
`

const CardProduto = (props) => {

    const addCart = () => {
        props.setCart([...props.cart, props.objeto])
    }

    return (
        <Prod>
            <div className="imagemP">
                {props.promo && <span>Promo</span>}
                <img src={props.image !== "" ? props.image : "https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"} alt="Imagem" />
            </div>
            <div className="conteudo">
                <h2 title={props.titulo}>{props.titulo !== "" ? props.titulo : "Titulo"}</h2>
                <h5>{props.category !== "" ? props.category : "Category"}</h5>
                <p title={props.description}>{props.description !== "" ? props.description : "Description"}</p>
                <h3>
                    <span>$ {props.desconto !== "" ? props.desconto : "200.00"}</span> $ {props.price !== "" ? props.price : "1.500"}
                </h3>
                <button onClick={addCart}>Comprar</button>
                <a href="#!" onClick={addCart}>
                    <img src={imagemCar} alt="Carrinho" />
                </a>
            </div>
        </Prod>
    )
}
export default CardProduto;

