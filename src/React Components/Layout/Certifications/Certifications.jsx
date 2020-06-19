import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { certifications } from '../../../db/certifications.json';
import './certifications.scss';
const Swiper = window.Swiper;

class Certifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.init_swiper();
    }

    init_swiper() {
        let sliderSelector = '.swiper1',
            isMove = false,
            options = {
                init: false,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 3500,
                },
                effect: 'cube', // 'cube', 'fade', 'coverflow',
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 30,
                    shadowScale: 0.9,
                },
                grabCursor: true,
                pagination: {
                    el: '.swiper1-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper1-button-next',
                    prevEl: '.swiper1-button-prev',
                },
                // Events
                on: {
                    init: function () {
                        this.autoplay.stop();
                    },
                    imagesReady: function () {
                        this.el.classList.remove('loading');
                        this.autoplay.start();
                    },
                    touchMove: function (event) {
                        if (!isMove) {
                            this.el.classList.remove('scale-in');
                            this.el.classList.add('scale-out');
                            isMove = true;
                        }
                    },
                    touchEnd: function (event) {
                        this.el.classList.remove('scale-out');
                        this.el.classList.add('scale-in');
                        setTimeout(function () {
                            isMove = false;
                        }, 300);
                    },
                    slideChangeTransitionStart: function () {
                        console.log('slideChangeTransitionStart ' + this.activeIndex);
                        if (!isMove) {
                            this.el.classList.remove('scale-in');
                            this.el.classList.add('scale-out');
                        }
                    },
                    slideChangeTransitionEnd: function () {
                        console.log('slideChangeTransitionEnd ' + this.activeIndex);
                        if (!isMove) {
                            this.el.classList.remove('scale-out');
                            this.el.classList.add('scale-in');
                        }
                    },
                    transitionStart: function () {
                        console.log('transitionStart ' + this.activeIndex);
                    },
                    transitionEnd: function () {
                        console.log('transitionEnd ' + this.activeIndex);
                    },
                    slideChange: function () {
                        console.log('slideChange ' + this.activeIndex);
                        console.log(this);
                    },
                },
            },
            mySwiper = new Swiper(sliderSelector, options);

        // Initialize slider
        mySwiper.init();
    }

    render() {
        const swiper_slides = certifications.map((cert, index) => (
            <div class='swiper-slide' style={{backgroundImage: `url(${cert})`}} key={`cert${index}`}>
                <img src={cert} class='entity-img' />
            </div>
        ));

        return (
            <div className='certifications--wrapper'>
                <div className='certifications--planet'></div>
                <div className='certifications'>
                    <div className='certifications__heading'>Certifications</div>
                    <div className='.container-fluid certifications__swiper'>
                        <div class='swiper-container swiper1 loading'>
                            <div class='swiper-wrapper'>{swiper_slides}</div>

                            {/* <!-- Add Pagination --> */}
                            <div class='swiper-pagination swiper1-pagination'></div>

                            {/* <!-- If we need pagination --> */}
                            <div class='swiper-pagination swiper1-pagination'></div>
                            {/* <!-- If we need navigation buttons --> */}
                            <div class='swiper-button-prev swiper1-button-prev swiper-button-white'></div>
                            <div class='swiper-button-next swiper1-button-next swiper-button-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Certifications);