import { Component } from '@angular/core';

@Component({
  selector: 'app-voice-reader',
  templateUrl: './voice-reader.component.html',
  styleUrls: ['./voice-reader.component.css']
})
export class VoiceReaderComponent {
  speechSynthesis: SpeechSynthesis = window.speechSynthesis;
  utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
  isPaused: boolean = false;
  isSpeaking: boolean = false;

  constructor() {
    this.utterance.lang = 'en-US'; // Set default language to English (US)
    this.setVoice();
  }

  // Set the voice to female
  setVoice() {
    const voices = this.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.name.toLocaleLowerCase().includes('female') || voice.voiceURI.includes('female'));
    if (femaleVoice) {
      this.utterance.voice = femaleVoice;
    } else {
      console.log("Female voice not available, defaulting to the first available voice.");
    }
    this.utterance.volume = 1;
    this.utterance.rate = 1;
    this.utterance.pitch = 1;
  }

  // Start or pause reading based on the current state
  toggleReading() {
    if (this.speechSynthesis.speaking && !this.isPaused) {
      this.pauseReading();
    } else if (this.isPaused) {
      this.resumeReading();
    } else {
      this.startReading();
    }
  }

  // Start reading the content
  startReading() {
    const content = this.getContentToRead();
    if (content.trim() === "") {
      alert("No content to read.");
      return;
    }
    this.utterance.text = content;
    this.speechSynthesis.speak(this.utterance);
    this.isSpeaking = true;
    this.isPaused = false;
  }

  // Pause reading
  pauseReading() {
    if (this.speechSynthesis.speaking && !this.isPaused) {
      this.speechSynthesis.pause();
      this.isPaused = true;
    }
  }

  // Resume reading
  resumeReading() {
    if (this.isPaused) {
      this.speechSynthesis.resume();
      this.isPaused = false;
    }
  }

  // Get the content to read (h1, h2, h3, h4, p elements)
  getContentToRead(): string {
    let content = '';
    const elements = document.querySelectorAll('h1, h2, h3, h4, p');
    elements.forEach((element: any) => {
      if (element && element.innerText) {
        content += element.innerText + ' ';
      }
    });
    return content;
  }
}
