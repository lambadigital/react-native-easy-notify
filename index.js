import React, {Component} from 'react';

import {NativeModules} from 'react-native';

import OneSignal from 'react-native-onesignal';

const {RNEasyNotify} = NativeModules.EasyNotify;

export default class EasyNotify extends Component {
    constructor(props) {
        super(props);
        console.log('EasyNotify constructor');

        OneSignal.init('91ea50e1-5db3-4e08-a501-e7d78a41ce7e', {
            kOSSettingsKeyAutoPrompt: true,
        });

        OneSignal.setLogLevel(6, 0);
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

    componentWillUnmount() {
        console.log('EasyNotify componentWillUnmount');

        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    async componentDidMount() {
        console.log('EasyNotify componentDidMount');
        OneSignal.setLocationShared(true);
        OneSignal.inFocusDisplaying(2);

        this.onReceived = this.onReceived.bind(this);
        this.onOpened = this.onOpened.bind(this);
        this.onIds = this.onIds.bind(this);

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);

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

    onReceived(notification) {
        console.log('Notification received: ', notification);

        this.setState({
            jsonDebugText: 'RECEIVED: \n' + JSON.stringify(notification, null, 2),
        });
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);

        this.setState({
            jsonDebugText:
                'OPENED: \n' + JSON.stringify(openResult.notification, null, 2),
        });
    }

    onIds(device) {
        console.log('Device info: ', device);
    }

    render() {
        console.log('EasyNotify render');

        return null;
    }
}
