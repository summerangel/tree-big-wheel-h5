/**
 * Created by summer on 2018/12/20.
 */
import React, { Component } from 'react';

import './AsyncComponent.scss';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            })
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.state} /> : null;
        }
    }

    return AsyncComponent;
}