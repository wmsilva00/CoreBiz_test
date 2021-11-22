import React, {useEffect, useState} from 'react';
import Slick from 'react-slick';

//Component
import Title from '../../Components/Title';

// CSS
import './style.css';

// SVG
import flag from '../../Svgs/flag.svg';
import startfull from '../../Svgs/full-star.svg';
import startempty from '../../Svgs/empty-star.svg'

function ProductList() {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        arrows: true,
        dots: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }]
      };

    const [productsList, setProductsList] = useState([]);

    const getProductData = async (urlData) => {
        return await fetch(urlData)
            .then(response => response.json())
            .then(data => {
                return data
            })
            .catch(error => console.info(error))
    }

    const rating = (props) => {

        var rate1 = (
            <div className="rating">
                <img src={startfull} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
            </div>
        )

        var rate2 = (
            <div className="rating">
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
            </div>
        )

        var rate3 = (
            <div className="rating">
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startempty} alt="no-description" />
                <img src={startempty} alt="no-description" />
            </div>
        )

        var rate4 = (
            <div className="rating">
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startempty} alt="no-description" />
            </div>
        )

        var rate5 = (
            <div className="rating">
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
                <img src={startfull} alt="no-description" />
            </div>
        )

        switch (props) {
            case 1:
                return rate1;
                break;
            case 2:
                return rate2;
                break;
            case 3:
                return rate3;
                break;
            case 4:
                return rate4;
                break;
            case 5:
                return rate5;
                break;
            default:
                console.log('No rating');
                break;
        }
    }
      
    useEffect(() => {
        getProductData('https://corebiz-test.herokuapp.com/api/v1/products').then((data) => setProductsList(data))
    }, [])

    return (

        <div className="productlist_layout_global">

            <div className="limit">

                <Title title="Mais Vendidos" />

                <div className="productlist_layout_content">
                    
                    <Slick {...settings}>
                    {productsList.map(product => { 
                        return (
                            <div className="card_component_global">  
                                <figure>
                                    {product.listPrice !== null &&
                                        (
                                            <img className="off" src={flag} alt="Em promoção" />
                                        )
                                    }
                                    <img src={product.imageUrl} alt={product.productName}/>
                                </figure>
                                <p className="name">{product.productName}</p>
                                {rating(product.stars)}
                                {product.listPrice !== null 
                                ? 
                                    <>
                                        <p className="before">de R${product.listPrice}</p> 
                                        <p className="after">por R${product.price}</p> 
                                    </>
                                : 
                                    <>
                                        <p className="after" diff="true">por R${product.price}</p>
                                    </>
                                }
                                {product.installments.length > 0
                                ?
                                    <>
                                        <p className="conditions">ou em {product.installments[0].quantity}x de R${product.installments[0].value}</p>
                                        <a href="#" className="link">Comprar</a>
                                    </>
                                : 
                                    <a href="#" className="link" diff="true">Comprar</a>
                                }
                            </div>
                            
                        )
                    })}
                    </Slick>

                </div>

            </div>

        </div>

    )

}

export default ProductList;