import React from 'react'
import { styled } from 'styled-components'
import { ColorPaint } from '../../../Styled/ColorPaint'


export const FiltroDiv = styled.section`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${ColorPaint[1].Light_Gray_2};
    
        form{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            
        }

        label{
            width: 100%;
            font-size: 1.5rem;
            font-weight: bold;
            font-style: italic;
        }

        input{
            margin: 20px auto;
            width: 90%;
            display: block;
            border-radius: 8px;
            background-color: ${ColorPaint[0].SuportColor};
            height: 50px;
            border: none;
            padding-left: 0px;
        }

        select{
            margin: 0 auto;
            width: 70%;
            height: 50px;
            border-radius: 8px;
            text-align: center;
            border: 2px dotted ${ColorPaint[0].Secundary_Color};
            outline: none;
        }

        @media only screen and (max-width: 768px){
           width: 100%;
           padding: 20px;
        }
`

export const Filtro = (props) => {

    const valor = (e) => {
        props.setValor(e.target.value)
    }

    return (
        <FiltroDiv>
            <h2 className='text-center'>Filtrar por:</h2><br />
            <form>


                <label htmlFor='minPreco'>
                    Preco minimo:
                    <input
                        type='text'
                        name='minPreco'
                        id='minPreco'
                        placeholder='Digite o valor minimo do produto'
                        value={props.minFilter} onChange={(e) => props.setMinFilter(e.target.value)}
                    />
                </label>
                
                <label htmlFor='maxPreco'>
                    Preco maximo:
                    <input
                        type='text'
                        name='maxPreco'
                        id='maxPreco'
                        placeholder='Digite o valor maximo do produto'
                        value={props.maxFilter} onChange={(e) => props.setMaxFilter(e.target.value)}
                    />
                </label>
            </form>

            <select onChange={(e) => valor(e)}>
                <option value="">Selecione por categoria</option>
                {props.lista}
            </select>
        </FiltroDiv>
    )
}


