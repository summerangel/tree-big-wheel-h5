/**
 * Created by summer on 2018/12/21.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import anime from 'animejs';
import { isEmpty } from 'lodash';

import './BigWheel.scss';

const ONE_TURN_ANGELS = 360;

const prizes = [
    {
        id: 1,
        textTop: '100金币',
        color: '#ED7444',
        prizeIndex: 1,
    },
    {
        id: 2,
        textTop: '300金币',
        color: '#ED7444',
        prizeIndex: 5,
    },
    {
        id: 3,
        textTop: '100元红包',
        color: '#ED7444',
        prizeIndex: 3,
    },
    {
        id: 4,
        textTop: '谢谢参与',
        color: '#ED7444',
        prizeIndex: 6,
    },
    {
        id: 5,
        textTop: '200元红包',
        color: '#ED7444',
        prizeIndex: 2,
    },
    {
        id: 6,
        textTop: '福袋一个',
        color: '#ED7444',
        prizeIndex: 4,
    },
];

export default class BigWheel extends Component {

    mapAngels = (prizes) => {
        return prizes.map((prize, index) => {
            return Object.assign({
                /**
                 *  if offsetSegment = 0 ->
                 *  0: 330 ~ 390
                 *  1: 270 ~ 330
                 *  2: 210 ~ 270
                 *  3: 150 ~ 210
                 *  4:  90 ~ 150
                 *  5:  30 ~ 90
                 *  *  if offsetSegment = 5 ->
                 *  0: 335 ~ 385
                 *  1: 275 ~ 325
                 *  2: 215 ~ 265
                 *  3: 155 ~ 205
                 *  4:  95 ~ 145
                 *  5:  35 ~ 85
                 */
                angel: this.offsetAngel + this.segmentAngel * (this.segments - index),
                transformAngel: this.segmentAngel * index
            }, prize)
        })
    };

    segments = 6;
    segmentAngel = ONE_TURN_ANGELS / this.segments;
    offsetSegment = 1;
    offsetAngel = this.offsetSegment - this.segmentAngel / 2;

    prizes = this.mapAngels(prizes);

    state = {
        prizes: this.prizes,
        angels: this.prizes.map(p => p.angel),
        sortedPrizes: this.prizes.slice().sort((a, b) => {
            return a.prizeIndex > b.prizeIndex;
        }),
        prize: {},
        //
        activity: []
    };

    lastOffsetAngel = ONE_TURN_ANGELS;
    lastWheelAngel = 0;
    running = false;

    componentDidMount() {

    };

    isWheelActive = () => {
      const activity = this.state.activity;
      return !isEmpty(activity);
    };

    start = (e) => {
      e.preventDefault();
      // if (this.running || !this.isWheelActive()) return;
        /*{
         "id": 123456,
         "name": "xxx",
         "contact": "xxx",
         "time": 2
         }*/
        const prize = this.state.prizes.find(p => p.id == 1);
        this.startAnimation(prize);
    };

    startAnimation = (prize) => {
        this.running = true;
        const resultPrizeIndex = prize.prizeIndex;
        const angels = this.state.angels;
        const angelStart = angels[resultPrizeIndex];
        const angelEnd = angelStart + this.segmentAngel - this.offsetSegment * 2;
        const realLastTurnAngelOffsetRandom = Math.floor(Math.random() * (angelEnd - angelStart)); // 0 - 50 or 0 - 60
        const realFinalAngel = angelStart + realLastTurnAngelOffsetRandom; // 330 - 390, or 335 - 385 based on segmentOffset
        console.log('result:', this.state.prizes[resultPrizeIndex]);
        console.log('index: %d, start: %d, end: %d, last-turn: %d, real-angel: %d', resultPrizeIndex, angelStart, angelEnd, realLastTurnAngelOffsetRandom, realFinalAngel);
        const defaultTurns = 4;
        const defaultAngels = defaultTurns * ONE_TURN_ANGELS;
        const beforeStartAngel = this.lastOffsetAngel > ONE_TURN_ANGELS
        ? (ONE_TURN_ANGELS - (this.lastOffsetAngel - ONE_TURN_ANGELS))
            : ONE_TURN_ANGELS - this.lastOffsetAngel;
        this.lastOffsetAngel = realFinalAngel;
        const rotateValue = this.lastWheelAngel + beforeStartAngel + defaultAngels; // + realFinalAngel
        console.log('before: %d, default: %d, real: %d, rotate value: %d', beforeStartAngel, defaultAngels, realFinalAngel, rotateValue);
        console.log('anime: %d - %d', this.lastWheelAngel, rotateValue);
        const startAngel = this.lastWheelAngel + beforeStartAngel;
        const midAngel = startAngel + defaultAngels;
        const endAngel = midAngel + realFinalAngel; // + ONE_TURN_ANGELS / 2

        anime({
            targets: this.wheel,
            rotate: [
                {
                    value: [this.lastWheelAngel, endAngel],
                    duration: 5000,
                    easing: [0.500, 0.000, 0.000, 1.000],
                    elasticity: 0
                }
            ],
            begin: () => {
                console.log('first started...');
            },
            complete: ani => {
                console.log('turn end: %d, rotate value: %d', ani.progress, endAngel);
                this.lastWheelAngel = endAngel;
                this.running = false;
            }
        })

    };

    render() {
        const { prizes } = this.state;
        return (
            <div className="big-wheel-container">
                <div className="big-wheel" ref={ele => this.wheel = ele}>
                    <div className="big-wheel__inner">
                        {
                            prizes.map((prize, index) => {
                                const tf = `translateX(-50%) rotate(${prize.transformAngel}deg)`;
                                const tfOrigin = 'center bottom';
                                const segmentStyle = {
                                    MozTransform: tf,
                                    MsTransform: tf,
                                    transform: tf,
                                    MozTransformOrigin: tfOrigin,
                                    MsTransformOrigin: tfOrigin,
                                    WebkitTransformOrigin: tfOrigin,
                                    transformOrigin: tfOrigin,
                                    color: prize.color
                                };
                                return (
                                    <div key={index}
                                         className="big-wheel__inner__prize"
                                         style={segmentStyle}
                                    >
                                        <p className="mb-0 text-truncate">{prize.textTop}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="big-wheel-pointer" onClick={this.start}></div>
            </div>
        )
    }
}