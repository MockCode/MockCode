import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PeerListElement from './PeerListElement';

export default class PeerList extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('CHECK');
  //   let o = this.props.devices;
  //   let n = nextProps.devices;

  //   // Check equal size, if different then guarantee update
  //   let update = false;
  //   if (o.size === n.size) {
  //     for (let ni of n) {
  //       if (!o.has(ni)) {
  //         update = true;
  //         break;
  //       }
  //     }
  //   }
  //   else {
  //     update = true;
  //   }

  //   if (update) {
  //     // Could help the GC out if constantly making new sets is a big deal
  //     // delete this.state.oldDevices;
  //     this.state.oldDevices = new Set(this.props.devices);
  //     this.forceUpdate();
  //     // console.log('UPDATE');
  //   }
  // }

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