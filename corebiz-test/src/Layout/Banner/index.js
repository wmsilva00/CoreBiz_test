
import React from "react";
import Slick from 'react-slick';

// Img
import bannarDesk from '../../Img/banner.jpg';
import bannarMob from '../../Img/banner-mobile.jpg';

// CSS
import './style.css';

function Banner() {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        dots: true
    };

    return (

        <div className="banner_layout_global">
            
            <Slick {...settings}>

                <picture>
                    <source media="(min-width: 767px)" srcSet={bannarDesk} />
                    <img src={bannarMob} />
                </picture>

                <picture>
                    <source media="(min-width: 767px)" srcSet={bannarDesk} />
                    <img src={bannarMob} />
                </picture>

            </Slick>

        </div>

    )

}

export default Banner;