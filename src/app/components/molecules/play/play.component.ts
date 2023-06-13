import { Component, Input } from '@angular/core';
import { Phonetic } from 'src/app/models/pages/search.model';
import { toPlayAudio } from 'src/app/utils/toPlayAudio.util';
import { getPhonetic } from 'src/app/utils/getPhonetic.util';
import { icon } from 'src/app/constants/icons.constant';
import { Icons } from 'src/app/models/constants/icons.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent {
  @Input() phonetics: Phonetic[] = [];
  isAudioPlaying: boolean = false;
  icons: Icons = icon;

  handleAudio() {
    this.isAudioPlaying = true;
    toPlayAudio(getPhonetic(this.phonetics) as string).onended = () => {
      this.isAudioPlaying = false;
    };
  }
}
