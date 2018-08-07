import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class PeerListElement extends React.PureComponent {
    render() {
        const item = this.props.item;
        return (
        <View style={styles.listElement}>
            <Text style={styles.connectionName}>{item.id}</Text>
            <Image
                source={require('../img/wifi.png')}
                style={styles.connectionType}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    listElement: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    connectionName: {
        flex: 0.7,
        fontSize: 25
    },
    connectionType: {
        flex: 0.3,
        alignSelf: 'center',
        width: undefined,
        resizeMode: 'contain'
    }
});

