import Renderer from '../src/components/Waveform/WaveformRenderer.js';

r = new Renderer('HR');

it ('return frame', () => {
  r.changeWaveform('HR','TEST');
  r.updateFrequency(120);
  f = r.getFrame(0, 2000);
  console.log(f);
  r.update();
  // return ;
});