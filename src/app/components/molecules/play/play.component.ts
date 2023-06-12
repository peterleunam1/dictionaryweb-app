import { Component } from '@angular/core';
import { toPlayAudio } from 'src/app/utils/toPlayAudio.util';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent {
  isAudioPlaying: boolean = false;
  handleAudio() {
    this.isAudioPlaying = true;
    toPlayAudio(
      'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'
    ).onended = () => {
      this.isAudioPlaying = false;
    };
  }
}
