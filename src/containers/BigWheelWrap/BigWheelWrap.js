/**
 * Created by summer on 2018/12/23.
 */
import React, { Component } from 'react';
import BigWheel from '../../containers/BigWheel/BigWheel';
import './BigWheelWrap.scss';

export default class BigWheelWrap extends Component {

    render() {
        return (
            <div className="big-wheel-wrap" style={{
                height: '603px'
            }}>
                <div className="coin-count">150</div>
                <div className="wheel-box">
                    <BigWheel />
                </div>
                <div className="exchange">
                    <div className="exchage__big-btn"></div>
                    <div className="exchage__small-btn"></div>
                </div>
                <div className="back-btn"></div>
            </div>
        )
    }
}