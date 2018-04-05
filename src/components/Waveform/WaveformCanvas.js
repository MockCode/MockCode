import React from "react";
import { Animated, StyleSheet, View} from "react-native";
import Svg, {Polyline, Circle} from 'react-native-svg';

import { waveformData } from './WaveformData.js';

import Renderer from './WaveformRenderer'
r = new Renderer('HR');

const stateForTime = (t) => ({
  plot : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  timeStep: (60 *(t / 100000)) % 1,
  plotStep: Math.floor((t / 10000) % 1 * 50),
  time: t,
});

class WaveformCanvas extends React.Component {
  // this.begin = Date.now();

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
    this.y = 50;
    this.begin = Date.now();
    this.renderFrame = this.renderFrame.bind(this);


    this.fps = 60;
    // this.now;
    this.then = Date.now();
    this.interval = 1000 / this.fps;

    this.windowTime = 5000;
    this.r = new Renderer('HR');
    this.r.changeWaveform('HR', 'NSR');
    this.r.updateFrequency(120);
    this.frame = this.r.getFrame(0, 100);
    // this.delta;
    // console.log(Dimensions.get('window').height, Dimensions.get('window').width);
  }
  componentDidMount() {
    // const ctx = this.refs.canvas.getContext('2d');
    // this.setState({ctx:ctx})
    // this.setState({ data: [[0, 50], [2, 50]]});
    this.fps = 30;
    // this.now;
    this.then = Date.now();
    this.interval = 1000 / this.fps;
    requestAnimationFrame(() => {
      this.renderFrame();
    });
  }

  handleCanvas = (canvas) => {
    console.log("render")
    // this.setState({canvas:canvas.getContext('2d')})
    // const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'purple';
    // ctx.fillRect(this.state.x, 0, this.state.x+5, 100);
    // this.setState({x:this.state.x + 1});
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
    //return Math.random()
  }

  config(w, h, bpm) {

  }

  renderFrame() {
    // const ctx = this.state.context;
    // console.log("render frame");
    // t = Date.now() - this.begin;
    // console.log(t);
    // if (t > 100000) {
    now = Date.now();
    delta = now - this.then;
    // console.log(now)

    

    if (delta > this.interval) {
      // this.then = now - (delta % this.interval);

      const stepsize = 5;

      // console.log(now, this.then, delta)
      if (this.state.dimensions && 0) {
          var frame = this.r.getFrame(this.then, delta);
          // var frame = this.frame.slice(0);

          if (frame.length != 0) {

          
          var p_per_i = (delta/frame.length)*(this.state.dimensions.width/5000)
          // console.log(p_per_i)
          frame.forEach((y, i) => {
            // frame[i] = [this.x + i * p_per_i, this.state.dimensions.height / (r.waveform.range.max - r.waveform.range.min) * (y - r.waveform.range.min)]
            frame[i] = [this.x + i*p_per_i, 10*(y + 0.5) ]
          })
          // console.log(frame);
          for (i = frame.length; i > 0; ) {
            // console.log(i, this.front.length, this.back.length);
            if ( this.x + i * p_per_i < this.state.dimensions.width) {
              // console.log("space")
              // append to front
              this.front = this.front.concat(frame);
              this.x += i* p_per_i;
              i = 0
              
            } else {
              // console.log("swap")
              var removable = Math.floor((this.state.dimensions.width - this.x)/ p_per_i);
              this.y = this.state.dimensions.height/2;
              this.back = this.front.concat(frame.splice(0, removable))
              // this.front = [[-1, this.y], [-1, this.y]];
              i -= removable;

              this.x = 0;
            }
            if (this.front.length >= 2 && this.back.length >= 2) {
              // console.log(this.front, this.back)
              this.setState({ front: this.front.join(' '), back: this.back.join(' ') });
    
            }
          }
        }

        // this.x += frame.length* p_per_i;


      }


      if (this.state.dimensions && 1){
        x = this.x + stepsize;
        // just a test for now to see it render :+1:
        // got magic numbers but it looks cool right now!!
        y = this.state.dimensions.height / 1.5 - 0.5 * this.state.dimensions.height * this.ecgGenerator(x);


        // this.setState({front_points:this.state.front_points.push([x,y])});
        // this.state.front_points.push([x,y]);
        // console.log(this.state.front_points);
        if (x < this.state.dimensions.width) {
          this.x = x;
          this.y = y;
          // this.setState({ x: x, y:y});
          // this.setState({front_points:this.state.front_points.push([x,y])})
          this.front.push([x, y]);
          if (this.back.length > 2) {
            // this.setState({back_points:this.state.back_points.splice(0,1)})
            // this.back.splice(0, 1);
            this.back.shift()
            // console.log(this.state.back_points)
          }
          if (this.front.length >= 2 && this.back.length >= 2) {
            // console.log(this.front.join(' '),this.back.join(' '));
            // if (this.front.length % 10 == 1) {
            this.setState({front:this.front.join(' '), back:this.back.join(' ')});

            // }

          }
        } else {
          // this.setState({ x: 0});
          this.x = 0;
          this.y = this.state.dimensions.height /2;
          // console.log(this.front, this.back)
          this.back = this.front;
          this.front = [[-1,this.y], [-1,this.y]];

          // this.setState({back_points:this.state.front_points, front_points:[[0,50], [2,50]]})
          // this.state.ctx.fillStyle = 'black' ;
          // this.state.ctx.fillRect(0,0,200,100);

        }
      }
      this.then = now;
    }

    // }
    // this.begin = t;

    requestAnimationFrame(this.renderFrame);
    // setInterval( this.renderFrame, 100000/60);
  }
  onLayout = event => {
    let { width, height } = event.nativeEvent.layout
    if (this.state.dimensions) {
      if (width == this.state.dimensions.width && height == this.state.dimensions.height) return;
    }
    this.setState({ dimensions: { width:width, height:height } })
    this.front = [];
    this.back = [[width+1, height/2], [width+1, height/2]];
    // if (width != this.state.dimensions.width || height != this.state.dimensions.height ) {

    // }
  }
  render() {
    // return (<Canvas ref="canvas" />)
    // let points = this.state.data;
    // console.log(this.state.dimensions);
    if (this.state.dimensions) {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch' }} onLayout={this.onLayout} >
        <Svg height={this.state.dimensions.height} width={this.state.dimensions.width}>
        <Polyline points={this.state.front}
        fill="none"
        stroke="red"
        strokeWidth="3"/>
        <Polyline points={this.state.back}
        fill="none"
        stroke="blue"
        strokeWidth="3" />
        <Circle r="4" cx={this.x} cy={this.y} fill="red"/>
        </Svg>
        </View>
      );
    } else {
      return (<View style={{ flex: 1, alignSelf: 'stretch' }} onLayout={this.onLayout}/>);

    }
    // return(null)
  }
}

// class WaveformCanvas extends React.Component {

//     // state = stateForTime(0)

//     constructor() {
//         super()
//         this.state ={
//             plot : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
//             timeStep: 0,
//             plotStep: 0,
//         }
//     }
//     componentDidMount(){
//         // const begin = Date.now();
//         // this.interval = setInterval(() => this.setState(
//         //     stateForTime(Date.now() - begin)
//         // ), 33);

//         const loop = time => {
//             this.raf = requestAnimationFrame(loop);
//             this.setState({
//                 plotStep: Math.floor((time / 10000) % 1 * 50),
//                 timeStep: ((3*time / 10000))%1 // cycle between 0 and 1
//             });
//         };
//         this.raf = requestAnimationFrame(loop);
//     }



//     componentWillUnmount () {
//         // clearInterval(this.interval);

//         cancelAnimationFrame(this.raf);
//     }

//     render() {
//         const { timeStep, plot, plotStep } = this.state
//         return(
//             <Animated.View style={styles.surfaceView}>
//             <Surface style={styles.surface}>
//             <Node
//             uniforms={{
//                 timeStep,
//                 plot,
//                 plotStep,
//             }}
//             shader={{
//                 frag: `
//                 precision highp float;
//                 varying vec2 uv;
//                 uniform float time;
//                 uniform float timeStep;
//                 uniform int plotStep;
//                 uniform float plot[50];

//                 float cursorWidth = 0.05;

//                 float Curve(float x, float y)
//                 {
//                     //return abs(x-y);
//                     return clamp(4. - abs(x-y) * 64., 0.0, 1.0);
//                 }

//                 float intersect (float a, float b)
//                 {
//                         return a + b;
//                 }

//                 void main () {
//                     gl_FragColor = vec4(0.);
//                     gl_FragColor += vec4(intersect(Curve(plot[plotStep] * 2., uv.y), Curve(uv.x, timeStep)));
//                 }
//                 `
//             }}
//             />
//             </Surface>
//             </Animated.View>
//         );

//     }
// }

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
