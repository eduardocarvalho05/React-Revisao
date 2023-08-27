import { styled } from "styled-components";
import { ColorPaint } from "../../../Styled/ColorPaint";
import imgLixeira from "../../../../assets-img/lixeira2.png"

export const Product = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    background-color: ${ColorPaint[1].Dark_Gray_3};
    padding: 10px;
    
      .imagemProduto{
        width: 20%;
        height: 100%;
          img{
            width: 100%;
          }
      }

      .content{
        width: 50%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

          h3, p{
            width: 100%;
            font-size: 1.3rem;
            height: fit-content;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          p{
            font-size: 1rem;
            font-style: italic;
          }

          span{
            font-size: 1.3rem;
            font-weight: 700;
            color: green;
          }

         
      }

      .Delete{
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

                img{
                    width: 80%;
                }

                &:active{
                    transform: scale(.97);
                }
          }
`;

const CardProduct = () => {
    return (
        <Product>
            <div className="imagemProduto">
                <img src="" alt="Imagem Produto" />
            </div>
            <div className="content">
                <h3>Titulo do produto lorem lorem lorem lorem lorem</h3>
                <p>Description</p>
                <span>$ 200.00</span>
            </div>

            <div className="Delete">
                <img src={imgLixeira} />
            </div>

        </Product>
    );
};

export default CardProduct;