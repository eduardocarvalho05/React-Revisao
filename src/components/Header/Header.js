import { Cabecalho } from './HeaderStyled';
import Hamburguer from './Menu Hamburguer/Hamburguer';
import { Logo } from './Logo/Logo';
import Carrinho from "./Carrinho/Carrinho"

export const Header = ({ cart, setCart }) => {



    return (
        <>
            <Cabecalho>
                <Hamburguer />
                <Logo />
                <Carrinho setCart={setCart} cart={cart} />
            </Cabecalho>
        </>
    )
}