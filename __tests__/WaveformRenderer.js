import Renderer from '../src/components/Waveform/WaveformRenderer.js';

r = new Renderer('HR');

it ('return frame', () => {
  r.changeWaveform('HR','NSR-SIMPLE');
  r.updateFrequency(120);
  f = r.getFrame(2, 14);
  console.log(f);
  // r.update();
  // return ;
});