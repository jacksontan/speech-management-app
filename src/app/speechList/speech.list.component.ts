import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speech } from '../models/Speech';
import { FilterPipe } from '../pipes/FilterPipe';

@Component({
	selector: 'speech-list',
	templateUrl: './speech-list.html',
	pipes: [FilterPipe]
})

export class SpeechListComponent  { 
	private searchText: String;
	searchHelpText: String = "Search speech's title, content, authors and keywords"

	@Input() speeches: Speech[];
	@Input() activeSpeech: Number;
	@Output() selectSpeech = new EventEmitter<Speech>();

	toggleSpeech(speech: Speech) {
		if(this.activeSpeech !== speech.id) {
			this.selectSpeech.emit(speech);
			this.activeSpeech = speech.id;
		}
		else {
			this.selectSpeech.emit(new Speech({}));
			this.activeSpeech = undefined;
		}
	}
}
