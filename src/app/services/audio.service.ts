export class AudioService {

  audioPlaying = false;
  audio = new Audio();
  playIconState = 'volume_off';

  constructor() {
    this.audio.src = 'assets/EXCIS-audio-4-min-loop.mp3';
  }

  playAudio(): void {
    if (!this.audioPlaying) {
      this.audio.load();
      this.audio.play();
      this.audioPlaying = true;
      this.playIconState = 'volume_up';
    } else {
      this.audio.load();
      this.audio.pause;
      this.audio.currentTime = 0;
      this.audioPlaying = false;
      this.playIconState = 'volume_off';
    }
  }
}
