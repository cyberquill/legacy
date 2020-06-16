import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { experience } from '../../../db/experience.json';
import './experience.scss';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.colors = [
            ['#7ed56f', '#28b485'],
            ['#ffb900', '#ff7730'],
            ['#2998ff', '#5643fa'],
        ];
    }

    componentDidMount() {
        this.setCardProperties();
    }

    setCardProperties() {
        const card_pictures = document.querySelectorAll('.experience__card__picture');
        for (let i = 0; i < card_pictures.length; i++) {
            card_pictures[i].style.backgroundImage = `linear-gradient(
                        to right bottom,
                        ${this.colors[i][0]},
                        ${this.colors[i][1]}
                    ),
                    url(${experience[i].resources[0].link})`;
        }

        const card_backs = document.querySelectorAll('.experience__card__side--back');
        for (let i = 0; i < card_backs.length; i++) {
            card_backs[i].style.backgroundImage = `linear-gradient(
                        to right bottom,
                        ${this.colors[i][0]},
                        ${this.colors[i][1]}
                    )`;
        }

        const card_headings = document.querySelectorAll('.experience__card__heading-span');
        for (let i = 0; i < card_headings.length; i++) {
            card_headings[i].style.background = `linear-gradient(
                        to right bottom,
                        ${this.colors[i][0]}d9,
                        ${this.colors[i][1]}d9
                    )`;
        }
    }

    render() {
        const experienceCards = experience.map((item, index) => (
            <div className='experience__card' key={`exp${index}`}>
                <div className='experience__card__side experience__card__side--front'>
                    <div className='experience__card__picture'>&nbsp;</div>
                    <h4 className='experience__card__heading'>
                        <span className='experience__card__heading-span'>{item.title}</span>
                    </h4>
                    <div className='experience__card__details'>
                        <ul>
                            <li>3 day tours</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </div>
                </div>
                <div className='experience__card__side experience__card__side--back'>
                    <div className='experience__card__cta'>
                        <div className='experience__card__price-box'>
                            <p className='experience__card__price-only'>Only</p>
                            <p className='experience__card__price-value'>$297</p>
                        </div>
                        <a href='#popup' className='btn btn--white'>
                            Book now!
                        </a>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className='experience--wrapper'>
                <div className='experience--planet'></div>
                <div className='experience'>
                    <div className="experience__heading">Experience</div>
                    <div className='experience__card--wrapper'>{experienceCards}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Experience);
