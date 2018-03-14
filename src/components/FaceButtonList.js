import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import FaceButton from './FaceButton';
import { faceNames } from '../screens/PatientScreen';

/**
 * Takes the exported dictionary of face names from the patient screen and
 * creates a list of views filled with buttons that change faces.
**/
function _valueListToViews() {
  let rows = [];
  let row = [];
  // Pair up values; we can easily extend change this to another number to put
  // more buttons on a row or can change the row creation logic and not affect
  // the ability to render
  for (const face in faceNames) {
    if (row.length >= 2) {
      rows.push(row);
      row = [];
    }
    row.push(face);
  }
  // If we have an odd number of faces then we need to push the solo key on
  if (row.length > 0)
    rows.push(row);

  // Start building our row views
  let views = [];
  for (i in rows) {
    let row = rows[i];

    // Make buttons for all of the values in this row
    let buttons = [];
    for (j in row) {
      let key = row[j];
      // We're rendering a list, so we need a key even if FaceButton doesn't. We
      // just use the column index number as a unique identifier on this row.
      buttons.push((
        <View key={j} style={styles.buttonView}>
          <FaceButton value={key} title={faceNames[key]} style={styles.button}/>
        </View>
      ));
    }

    // Save this row
    views.push((
      // Since we're rendering a list, it requires a key. Luckily we can just
      // use the row number as a unique identifier
      <View style={styles.rowStyle} key={i}>
        { buttons }
      </View>
    ));
  }

  return views;
}

// Simple class that renders a scroll view with the internals as buttons list.
// All of the hard work is done in the above function
export default class FaceButtonList extends PureComponent {
  render() {
    return (
      <ScrollView>
        { _valueListToViews() }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '0.5%',
    marginBottom: '0.5%',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  }
});
