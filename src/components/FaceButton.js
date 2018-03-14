import React, { PureComponent } from 'react';
import { Button } from 'react-native';

import PropTypes from 'prop-types';

import { Update_Value, ACTIONS } from '../redux/actions/nearbyActions';
import { faceNames } from '../screens/PatientScreen';

export default class FaceButton extends PureComponent {
  // Validate props
  static propTypes = {
    // We need to make sure that the value prop is actually a string and a face
    // name
    value: function(props, propName, componentName) {
      let key = props[propName];
      let type = typeof key;

      if (type === "undefined")
        return new Error('Value prop is required');

      if (!(type === "string"))
        return new Error('Invalid value prop type: ' + type);

      if (!(key in faceNames))
        return new Error('Value prop is not a patient face name: ' + key);
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
