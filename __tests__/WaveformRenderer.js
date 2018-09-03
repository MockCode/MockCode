import Renderer from '../src/components/Waveform/WaveformRenderer.js';

let r = new Renderer('HR');

it ('return frame', () => {
  r.changeWaveform('HR','NSR-SIMPLE');
  r.updateFrequency(120);
  let f = r.getFrame(2, 14);
  console.log(f);
  // r.update();
  // return ;
});