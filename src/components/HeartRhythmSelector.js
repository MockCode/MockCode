import React, { Component } from "react";
import PropTypes from'prop-types'
import { Icon, Root, Container, Button, ActionSheet, Text } from "native-base";

const BUTTONS = ["Normal Sinus Rhythmn", "Ventricular Tachycardia" ,"Ventricular Fibrillation"]
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export class HeartRhythmSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <Button rounded small iconLeft light
        onPress={() => ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "Heartbeat Waveform"
          },
          buttonIndex => {
            this.setState({clicked: BUTTONS[buttonIndex]});
            if (buttonIndex >= 0 && buttonIndex < BUTTONS.length){
              this.props.onValueChange(BUTTONS[buttonIndex]);
            }
          }
        )}>
        <Icon name='pulse' />
        <Text>Waveforms</Text>
        </Button>
    );
  }
}

HeartRhythmSelector.propTypes = {
  onValueChange: PropTypes.func.isRequired
}