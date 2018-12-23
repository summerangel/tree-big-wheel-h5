/**
 * Created by summer on 2018/12/22.
 */
import React, { Component } from 'react';
import Swiper from 'swiper';
import './Carousel.scss';

export default class Carousel extends Component {

    componentDidMount() {
        this.initSwiper();
    }

    componentWillUnmount() {
        // this.winnerSwiper.destroy(true, true);
    }

    initSwiper = () => {
        this.winnerSwiper = new Swiper(this.winnerSwiperContainer, {
            direction: 'vertical',
            autoplay: {
                delay: 3000,
            },
            speed: 1000,
            // spaceBetween: 10
        })
    };

    render() {
        return (
            <div className="carousel">
                <div className="swiper-container" ref={ele => this.winnerSwiperContainer = ele}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">尾号 7869 摇中 100元 红包</div>
                        <div className="swiper-slide">尾号 4907 摇中  50元 红包</div>
                        <div className="swiper-slide">尾号 2218 摇中  5元  红包</div>
                        <div className="swiper-slide">尾号 4778 摇中  20元 红包</div>
                        <div className="swiper-slide">尾号 4379 摇中  10元 红包</div>
                        <div className="swiper-slide">尾号 3367 摇中  50元 红包</div>
                    </div>
                </div>
            </div>
        )
    }
}