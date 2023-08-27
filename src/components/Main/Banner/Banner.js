import React from 'react'
import { styled } from 'styled-components'
import bannerMain from '../../../assets-img/Banner/astro.jpeg'
import { ColorPaint } from '../../Styled/ColorPaint'



export const BannerContainer = styled.section`
    width: 100%;
    min-height: calc(100vh - 15vh);
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;

    .contentBanner{
        flex: 1;
        background-color: ${ColorPaint[0].SuportColor};
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 100px;

        h2{
                font-size: 3rem;
                text-align: center;
                color: transparent;
                background: linear-gradient(to right, #00000090, #8F8F93, #00000090);
                -webkit-background-clip: text;
            }

            .textoBanner{
                width: 100%;
                height: 80%;
                display: flex;
                gap: 50px;
                flex-direction: column;
                align-items: center;
                p{
                    font-size: 2rem;
                }
            }
    }

        .imageBanner{
            width: 50%;
            height: 100%;
               img{
                width: 100%;
                height: 100%;
                object-fit: cover;
               }
        }

        @media only screen and (max-width: 480px){
            flex-direction: column-reverse;

            .contentBanner{
                width: 100%;
                gap: 10px;
                text-align: center;

                h2{
                font-size: 1.8rem;
                text-align: center;
                color: transparent;
                background: linear-gradient(45deg, #00FFCC, #550033, #00000090);
                -webkit-background-clip: text;
                }

                    .textoBanner{                    
                   gap: 30px;
                        p {
                    font-size: 1rem;
                  }
                }
            }

            .imageBanner{
                width: 100%;
            }
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
        flex-direction: column-reverse;
        gap: 0;
        .contentBanner{
            width: 100%;
            gap: 10px;
            text-align: center;

                h2{
                font-size: 1.8rem;
                text-align: center;
                color: transparent;
                background: linear-gradient(45deg, #00FFCC, #550033, #00000090);
                -webkit-background-clip: text;
                }

                .textoBanner{
                    gap: 30px;
                    p{
                        font-size: 1rem;
                    }
                }
        }

        .imageBanner{
            width: 100%;
        }
    }
`


export const Banner = () => {
    return (
        <>
            <BannerContainer>
                <div className="contentBanner">
                    <h2>Bem-vindo à AstroDev: O Seu Destino para Artigos Exclusivos Espaciais e Tecnologia Avançada!</h2>

                    <div className="textoBanner">
                        <p>
                            Navegue pela nossa coleção para descobrir produtos únicos que unem o cosmos e a inovação. Seja parte da jornada espacial da AstroDev hoje mesmo!
                        </p>
                        <p>
                            Explore o universo de produtos exclusivos da AstroDev, onde a tecnologia encontra o espaço. Descubra agora e leve um pedaço do cosmos para casa!
                        </p>
                        <p>
                            Explore o universo de produtos exclusivos da AstroDev, onde a tecnologia encontra o espaço. Descubra agora e leve um pedaço do cosmos para casa!
                        </p>
                    </div>

                </div>

                <div className="imageBanner">
                    <img src={bannerMain} alt="Banner Main" />
                </div>

            </BannerContainer>
        </>
    )
}

export default Banner
