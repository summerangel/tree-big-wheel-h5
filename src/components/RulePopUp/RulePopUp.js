/**
 * Created by summer on 2018/12/23.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './RulePopUp.scss';

export default class RulePopUp extends Component {
    static propTypes = {
        isShow: PropTypes.bool,
        onCloseFunc: PropTypes.func
    };
    static defaultProps = {
        isShow: false,
        onCloseFunc: () => {}
    };

    render() {
        const { isShow, onCloseFunc } = this.props;
        return (
            <div className={classnames('rule-pop', {show: isShow})}>
                <div className="rule-pop__content">
                    <div className="rule-pop__close" onClick={e => {
                        e.preventDefault();
                        onCloseFunc();
                    }}></div>
                    <div className="rule-pop__content__box">
                        <div className="rule-pop__content__box__item">
                            1、摇钱树发钱啦！点击摇钱树，有概率掉出现金 红包、金币、幸运福袋等。收集到的金币可以兑换 现金红包、参与转盘大抽奖，赢得多多福利！（金币每日清零抓紧，抓紧机会哦）
                        </div>
                        <div className="rule-pop__content__box__item">
                            2、实物类奖品将在活动结束后5-10个工作日安排发货，请耐心等待；
                        </div>
                        <div className="rule-pop__content__box__item">
                            3、优惠券类奖品的使用规则详见每个优惠券的介绍页；
                        </div>
                        <div className="rule-pop__content__box__item">
                            4、请兑换后仔细阅读使用流程，如有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00-18:00）；
                        </div>
                        <div className="rule-pop__content__box__item">
                            5、通过非法途径获得奖品的，主办方有权不提供奖品。
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}