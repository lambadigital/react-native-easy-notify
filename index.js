import { NativeModules } from 'react-native';

const { RNEasyNotify } = NativeModules.EasyNotify;

export default class EasyNotify {
    static init(id, settings) {
        console.log("EasyNotify ID:" + id);
        console.log("EasyNotify settings:" + settings);
    }

    /* deprecated */
    static configure() {
        console.log("EasyNotify configure deprecated");
    }
}
