import React from "react";
import { Animated, StyleSheet, View} from "react-native";
import Svg, {Polyline, Circle, Rect} from 'react-native-svg';

import { waveformData } from './WaveformData.js';

import Renderer from './WaveformRenderer'
r = new Renderer('HR');

class WaveformCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      x:0,
      y:50,
      canvas:null,
      front:"-1,50 -1,50",
      back:"198,0 200,0",
      dimensions:undefined
    };
    this.front = [];
    this.back = [[201,0], [202, 0]];
    this.x = 0;
    this.arrIndex = 0;
    this.y = 50;
    this.begin = Date.now();
    this.renderFrame = this.renderFrame.bind(this);


    this.fps = 15;
    this.then = Date.now();
    this.interval = 1000 / this.fps;

    this.windowTime = 5000;
    this.r = new Renderer('HR');
    this.r.changeWaveform('HR', 'NSR');
    this.r.updateFrequency(120);
    this.frame = this.r.getFrame(0, 100);
  }
  componentDidMount() {
    this.fps = 30;
    this.then = Date.now();
    this.interval = 1000 / this.fps;
    requestAnimationFrame(() => {
      this.renderFrame();
    });
  }

  handleCanvas = (canvas) => {
    console.log("render")
    requestAnimationFrame(() => {
      this.renderFrame();
    });

  }

  ecgGenerator(x) {
    let twindow = x % 300;
    return waveformData.HR.VT.dataPoints[twindow]
    if (twindow < 35) {
    } else {
      return 1;
    }
  }

  _waveform(x) {
    var s = store.getState();
    switch (this.props.wavetype) {
      case "HR":
        switch (s.Waveform) {
          case "Normal Sinus Rhythm":
            var w = waveformData.HR.NSR;
            c = Math.floor(this.state.dimensions.width / (5000 * (store.getState().HeartRate / 60000)));
            cadence = Math.min(c, w.nPoints);
            break

          case "Ventricular Tachycardia":
            var w = waveformData.HR.VT
            cadence = w.nPoints
            break;
          case "Ventricular Fibrillation":
            var w = waveformData.HR.VF
            cadence = w.nPoints

            break;
          case "PEA/Asystole":
            var w = waveformData.HR.PEA
            cadence = w.nPoints
            break;
          case "Compressions In-Progress":
            var w = waveformData.HR.ASYSTOLE;
            cadence = w.nPoints;
        }

        var p = w.dataPoints[x % cadence];
        var scaled =  (w.range.max -  p) / (w.range.max - w.range.min) * this.state.dimensions.height
        return scaled;
        break

      case "BP":
        if (s.Waveform == "Compressions In-Progress") {
          return this.state.dimensions.height /2;
        } else {
          return x % 200;
        }
        break;
      case "O2Sat":
        scaled = this.state.dimensions.height - this.state.dimensions.height * (s.O2Sat / 100) + 10
        return scaled;
        break;
      default:
        return 100;
    }
  }

  config(w, h, bpm) {

  }

  renderFrame() {
    now = Date.now();
    delta = now - this.then;

    if (delta > this.interval) {
      this.then = now - (delta % this.interval);

      const stepsize = 5;

      if (this.state.dimensions && 0) {
        var frame = this.r.getFrame(this.then, delta);

        if (frame.length != 0) {
          var p_per_i = (delta/frame.length)*(this.state.dimensions.width/5000)
          frame.forEach((y, i) => {
            frame[i] = [this.x + i*p_per_i, 10*(y + 0.5) ]
          })
          for (i = frame.length; i > 0; ) {
            if ( this.x + i * p_per_i < this.state.dimensions.width) {
              this.front = this.front.concat(frame);
              this.x += i* p_per_i;
              i = 0

            } else {
              var removable = Math.floor((this.state.dimensions.width - this.x)/ p_per_i);
              this.y = this.state.dimensions.height/2;
              this.back = this.front.concat(frame.splice(0, removable))
              i -= removable;
              this.x = 0;
            }
            if (this.front.length >= 2 && this.back.length >= 2) {
              this.setState({ front: this.front.join(' '), back: this.back.join(' ') });
            }
          }
        }
      }


      if (this.state.dimensions && 1){
        x = this.x + stepsize;

        this.arrIndex += stepsize;
        y = this._waveform(this.arrIndex);

        if (x < this.state.dimensions.width) {
          this.x = x;
          this.y = y;
          this.front.push([x, y]);
          if (this.back.length > 2) {
            this.back.shift()
          }
          if (this.front.length >= 2 && this.back.length >= 2) {
            this.setState({front:this.front.join(' '), back:this.back.join(' ')});
          }
        } else {
          this.x = 0;
          this.y = this.state.dimensions.height /2;
          this.back = this.front;
          this.front = [[-1,this.y], [-1,this.y]];
        }
      }
    }
    requestAnimationFrame(this.renderFrame);
  }
  onLayout = event => {
    let { width, height } = event.nativeEvent.layout
    if (this.state.dimensions) {
      if (width == this.state.dimensions.width && height == this.state.dimensions.height) return;
    }
    this.setState({ dimensions: { width:width, height:height } })
    this.front = [];
    this.back = [[width+1, height/2], [width+1, height/2]];
  }
  render() {
    if (this.state.dimensions) {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch' }} onLayout={this.onLayout} >
        <Svg height={this.state.dimensions.height} width={this.state.dimensions.width}>
        <Polyline points={this.state.front}
        fill="none"
        stroke="green"
        strokeWidth="3"/>
        <Polyline points={this.state.back}
        fill="none"
        stroke=this.props.colour
        strokeWidth="3" />
        {/* <Rect r="4" cx={this.x} cy={this.y} fill="#1c2321"/> */}
        <Rect x={this.x -5} width="10" height={this.state.dimensions.height} fill="#1c2321"/>
        </Svg>
        </View>
      );
    } else {
      return (<View style={{ flex: 1, alignSelf: 'stretch' }} onLayout={this.onLayout}/>);

    }
  }
}

const styles = StyleSheet.create({
  surface : {
    width: '100%',
    height: '100%'
  },
  surfaceView : {
    width: '75%',
    height: '92%',
    marginBottom: '8%'
  }
});

export default WaveformCanvas;
