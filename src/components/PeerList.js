import React, { PureComponent, Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import { NetworkComp } from './network';

class PeerListElement extends PureComponent {
  render() {
    const item = this.props.item;
    return (
      <View style={styles.listElement}>
        <Text style={styles.connectionName}>{item.id}</Text>
          <Image
            source={require('./img/wifi.png')}
            style={styles.connectionType}
          />
      </View>
    )
  }
}

class PeerList extends PureComponent {
  constructor(props) {
    super(props);

    // This is our reference for what the old list looked like so we can do a
    // comparison with an update
    this.state = {
      'oldDevices': new Set(props.devices),
    }

    // Bind the subscription callback so we always have access to our state
    this.checkDeviceChanges = this.checkDeviceChanges.bind(this);

    // I wish this wasn't a subscribe, but a better solution will need more time
    store.subscribe(this.checkDeviceChanges);
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <PeerListElement item={item}/>
  );

  // This conditionally causes the component to update if we notice a difference
  // in the nearby device listing. There should be a better way of depending on
  // the redux state for this to automatically cause an update.
  checkDeviceChanges() {
    console.log('CHECK');
    let o = this.state.oldDevices;
    let n = this.props.devices;

    // Check equal size, if different then guarantee update
    let update = false;
    if (o.size === n.size) {
      for (let ni of n) {
        if (!o.has(ni)) {
          update = true;
          break;
        }
      }
    }
    else {
      update = true;
    }

    if (update) {
      // Could help the GC out if constantly making new sets is a big deal
      // delete this.state.oldDevices;
      this.state.oldDevices = new Set(this.props.devices);
      this.forceUpdate();
      console.log('UPDATE');
    }
  }

  render() {
    let data = [];
    this.props.devices.forEach(i => data.push({ id: i }));
    return (
      <View style={styles.fill}>
        <NetworkComp />
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
    alignSelf: 'center', // Align image vertically center, handles list elements
                         // with names longer than a single line vertically
    width: undefined,
    // height: undefined,
    resizeMode: 'contain'
  },
  fill: {
    flex: 1
  },
})


const mapStateToProps = (state) => {
  return {
    devices:state.NearbyApi.devices
  }
}

export default connect(mapStateToProps)(PeerList);
