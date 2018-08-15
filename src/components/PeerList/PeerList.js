import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PeerListElement from './PeerListElement';

export default class PeerList extends React.PureComponent {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <PeerListElement item={item}/>
  );

  render() {
    let data = [];
    this.props.devices.forEach(i => data.push({ id: i }));
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}