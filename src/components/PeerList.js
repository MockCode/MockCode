import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';

class PeerListElement extends PureComponent {
  render() {
    const item = this.props.item;
    return (
      <View style={styles.listElement}>
        <Text style={{fontSize: 25}}>{item.id}</Text>
        <Image source={require('./img/wifi.png')}/>
      </View>
    )
  }
}

export default class PeerList extends PureComponent {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <PeerListElement item={item}/>
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  listElement: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
