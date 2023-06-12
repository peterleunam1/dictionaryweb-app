import { Component, Input } from '@angular/core';
import { Phonetic } from 'src/app/models/search-model';
import { toPlayAudio } from 'src/app/utils/toPlayAudio.util';
import { getPhonetic } from 'src/app/utils/getPhonetic.util';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent {
  @Input() phonetics: Phonetic[] = [];
  isAudioPlaying: boolean = false;

  handleAudio() {
    this.isAudioPlaying = true;
    toPlayAudio(getPhonetic(this.phonetics) as string).onended = () => {
      this.isAudioPlaying = false;
    };
  }
}
