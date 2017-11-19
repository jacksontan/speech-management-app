import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speech } from '../models/Speech';

@Component({
	selector: 'speech-form',
	templateUrl: './speech-form.html'
})
export class SpeechFormComponent  { 
	
	@Input() selectedspeech: Speech = new Speech({});
	@Output() onsave = new EventEmitter<Speech>();
	@Output() onsaveasnew = new EventEmitter<Speech>();
	@Output() ondelete = new EventEmitter<Speech>();

	constructor() {
		this.selectedspeech = new Speech({});
	}

	save() {
		this.onsave.emit(this.selectedspeech);
	}

	saveAsNew() {
		this.onsaveasnew.emit(this.selectedspeech);
	}

	delete() {
		this.ondelete.emit(this.selectedspeech);
	}
}
