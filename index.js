import React, {Component} from 'react';

import {NativeModules} from 'react-native';

const {RNEasyNotify} = NativeModules.EasyNotify;

export default class EasyNotify extends Component {
    constructor(props) {
        super(props);
        console.log('EasyNotify constructor');
    }

    UNSAFE_componentWillMount() {
        console.log('EasyNotify UNSAFE_componentWillMount');

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('EasyNotify UNSAFE_componentWillReceiveProps');
    }

    componentDidUpdate() {
        console.log('EasyNotify componentDidUpdate');
    }

    initialize = (props) => {
        console.log('EasyNotify initialize');

        console.log(props);
    };

    static init(id, settings) {
        console.log('EasyNotify ID:' + id);
        console.log('EasyNotify settings:' + settings);
    }

    /* deprecated */
    static configure() {
        console.log('EasyNotify configure deprecated');
    }

    render() {
        console.log('EasyNotify render');

        return null;
    }
}
