import React from "react";

import { waveformData } from './WaveformData';


export default class Renderer {

    constructor(w) {
      // super();
      this.wavetype = w;
      this.waveform = waveformData[this.wavetype][0]
      this.then = Date.now();
      this.windowTime = 5000; // monitor is 5s of wave forms before repeating
      this.width = 200;
      this.height = 100;

      this.changeWaveform('HR', 'NSR');
      this.updateFrequency(60);
      this.wave = [];
    }

    getFrame(x_t, t_render) {

      // x is the current x position
      // get frame information
      var time_in_frame = x_t % this.wavePeriod;
      
      var first_point = Math.floor(time_in_frame / this.pixelTime);
      var num_points = Math.floor(t_render / this.pixelTime);

      var slice = []
      for (i = 0; num_points >0; i++) {
        if (num_points > this.maxPoints - first_point) {
          slice = slice.concat(this.waveform.dataPoints.slice(first_point, this.maxPoints - first_point));
          num_points -= this.maxPoints - first_point;
          first_point = 0;
        } else {
          slice = slice.concat(this.waveform.dataPoints.slice(first_point, num_points));
          num_points = 0;
        }
      }
      return slice;
    }

    update() {
      frame = this.getFrame(0, 200);
      var x = 6;
      console.log(frame)
      frame.forEach((y, i, l) => {
        frame[i] = [x + 0.9*i, y]
      });
      console.log(frame, frame.length);
    }
    updateWindow(w, h) {
      this.width = w;
      this.height = h;
    }

    updateFrequency(f) {
      this.wavePeriod = (1/f)*60000;
      this.maxPoints = this.wavePeriod / this.waveform.totalDuration * this.waveform.nPoints;
      if (this.maxPoints > this.waveform.nPoints) {
        for (i = this.waveform.nPoints, s = this.waveform.dataPoints.slice(-1)[0]; i < this.maxPoints; i += 1) {
          this.waveform.dataPoints.push(s);
        }
      }
    }

    changeWaveform(wt, w) {
      this.wavetype = wt
      this.wave = w
      this.waveform = waveformData[wt][w]
      this.pixelTime = this.waveform.totalDuration / this.waveform.nPoints
    }
}
