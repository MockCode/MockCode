import React, { PureComponent } from 'react';
import { Button } from 'react-native';

import PropTypes from 'prop-types';

import { Update_Value, ACTIONS } from '../redux/actions/nearbyActions';
import { faceNames } from '../screens/PatientScreen';


export default class FaceButton extends PureComponent {

  // Validate props
  static propTypes = {
    // We need to make sure that the value prop is actually a face name
    value: function(props, propName, componentName) {
      let key = props[propName];
      if (!(key in faceNames))
        return new Error('Invalid value prop in FaceButton: ' + key);
    },
  }

  _update() {
    const {value} = this.props;
    store.dispatch(Update_Value(ACTIONS.UPDATE_FACE, value));
  }
  
  render() {
    const {value} = this.props;
    return (
      <Button
        title={faceNames[value]}
        onPress={() => this._update()}
      />
    )
  }
}
