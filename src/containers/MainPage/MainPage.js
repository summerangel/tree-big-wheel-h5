/**
 * Created by summer on 2018/12/20.
 */
import React, { Component } from 'react';
import TreeMoney from '../../containers/TreeMoney/TreeMoney';
import BigWheelWrap from '../../containers/BigWheelWrap/BigWheelWrap';

import './MainPage.scss';

export default class MainPage extends Component {

    render() {
        return (
            <div className="main-page-wrapper" style={{
                // height: window.innerHeight * 2
                // height: 1206
            }}>
                <TreeMoney />
                <BigWheelWrap />
            </div>
        )
    }
}