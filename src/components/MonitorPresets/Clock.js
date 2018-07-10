import React from 'react';
import {Text} from 'react-native';
import dateFormat from 'dateformat';
import {moderateScale} from '../../utils/scaling';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.ticker = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <Text style={{fontWeight: 'bold', fontSize: moderateScale(25)}}>{dateFormat(this.state.time,
                "HH:MM:ss")}</Text>
        );
    }
}