import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native'
import FadeInView from 'react-native-fade-in-view';
import {Icon} from 'native-base';

export default class PresetChangerArrow extends React.PureComponent {
    render(){
        return (
            this.props.show &&
            <FadeInView
                duration={750}
                style={[this.props.style, styles.presetChangers]}>
                <TouchableOpacity style={styles.presetChangerButton}>
                    <Icon
                        type='MaterialIcons'
                        name={this.props.arrow}
                        style={{color: 'white'}}
                    />
                </TouchableOpacity>
            </FadeInView>
        );
    }
}

const styles = StyleSheet.create({
    presetChangers: {
        flex: 1,
        position: 'absolute',
        width: 25,
        height: 80,
        zIndex: 100
    },
    presetChangerButton: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.4,
        justifyContent: 'center',
        borderRadius: 5
    }
});