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

class PeerList extends Component {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <PeerListElement item={item}/>
  );

  render() {
    return (
      // <View>
      // <NetworkComp/>
      <FlatList
        data={this.props.devices}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
      // </View>
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
  }
})


const mapStateToProps = (state) => {
  return {
    devices:state.NearbyApi.devices
  }
}

export default connect(mapStateToProps)(PeerList);

