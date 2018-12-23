/**
 * Created by summer on 2018/12/23.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import RulePopUp from '../../components/RulePopUp/RulePopUp';
import Carousel from '../../containers/Carousel/Carousel';
import './TreeMoney.scss';

export default class TreeMoney extends Component {
    state = {
        isRulePopUp: false,
        isCoinToastShow: false, // 是否显示 金币换大礼
        isCoinLightShow: false, // 是否显示 金币光环
        isCoinFall: false, // 是否有  金币掉落 的效果
        freeTimes: 15
    };

    handleRulePopUp = () => {
        this.setState({
            isRulePopUp: !this.state.isRulePopUp
        })
    };

    render() {
        const { isCoinToastShow, isCoinLightShow, isCoinFall, freeTimes } = this.state;
        return (
            <div className="tree-money" style={{
                height: '603px'
            }}>
                <img
                    className="rule-btn"
                    src={require('../../assets/images/tree-money/rule.png')}
                    alt="规则"
                    onClick={e => {
                        e.preventDefault();
                        this.handleRulePopUp();
                    }}/>
                <img
                    className="award-received"
                    src={require('../../assets/images/tree-money/award_received.png')}
                    alt="摇到的奖品"
                />
                <div className="coin-box">
                    <div className="coin-box__wrap">
                        <div className="coin-box__wrap__coin">￥ <span>50</span></div>
                        <p className={classnames('coin-box__wrap__toast', {show: isCoinToastShow})}>金币换大礼</p>
                    </div>
                    <div className={classnames('coin-box__light', {show: isCoinLightShow})}></div>
                </div>
                <div className="tree-head treeShake"></div>
                <div className="tree-foot"></div>
                <div className={classnames('coin-fall', {show: isCoinFall})}></div>
                <div className="winner-carousel">
                    <Carousel />
                </div>
                <div className="shake-btn"></div>
                <div className="free-time">
                    免费次数：
                    <span>{freeTimes}</span>
                    次
                </div>
                <RulePopUp
                    isShow={this.state.isRulePopUp}
                    onCloseFunc={this.handleRulePopUp}
                />
            </div>
        )
    }
}