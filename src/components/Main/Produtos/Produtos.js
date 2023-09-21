import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Filtro } from './Filtro/Filtro';
import CardProduto from './CardProduto/CardProduto';
import { FakeApi } from '../../../services/FAKE API/FakeApi';

export const ContainerProduto = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;

    .containerProd {
        padding: 20px 200px 0;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-around;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        .containerProd {
            width: 100%;
            padding: 0;
        }
    }
`;

export const Produtos = (props) => {
    const [valor, setValor] = useState('');
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');

    const optSelect = FakeApi.map(item => <option key={item.id}>{item.categoria}</option>);

    return (
        <>
            <ContainerProduto>
                <Filtro
                    valor={valor}
                    setValor={setValor}
                    lista={optSelect}
                    listaProduto={FakeApi}
                    minFilter={minFilter}
                    setMinFilter={setMinFilter}
                    maxFilter={maxFilter}
                    setMaxFilter={setMaxFilter}
                />
                <div className='containerProd'>
                    {FakeApi.filter((item) => {
                        if (minFilter > 0 && maxFilter > 0) {
                            return item.preco >= minFilter && item.preco <= maxFilter;
                        } else {
                            return true;
                        }
                    })
                        .filter((item) => {
                            if (valor !== "") {
                                return item.categoria === valor;
                            } else {
                                return true;
                            }
                        })
                        .map((item) => (
                            <CardProduto
                                key={item.id}
                                promo={item.promocao}
                                image={item.image}
                                titulo={item.titulo}
                                category={item.categoria}
                                description={item.descricao}
                                desconto={item.desconto}
                                price={item.preco}
                                objeto={item}
                                setCart={props.setCart}
                                cart={props.cart}
                                id={item.id}
                            />
                        ))}
                </div>
            </ContainerProduto>
        </>
    );
};

export default Produtos;
