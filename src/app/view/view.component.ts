import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speech } from '../models/Speech';
import { SpeechService } from '../services/SpeechService';
import { SpeechListComponent } from '../speechList/speech.list.component';
import { SpeechFormComponent } from '../speechForm/speech.form.component';


@Component({
	selector: 'view-speech',
	templateUrl: './view.html',
	directives: [SpeechListComponent, SpeechFormComponent]
})
export class ViewSpeechComponent  { 
	selectedSpeech: Speech;
	speeches: Speech[];

	constructor(private speechService: SpeechService) {
		this.speechService = speechService;
		this.selectedSpeech = new Speech({});
		this.speeches = speechService.getSpeeches();
	}
	setSpeech(speech: Speech) {
		this.selectedSpeech = JSON.parse(JSON.stringify(speech));;
	}

	saveSpeech(speechToSave: Speech) {
		this.speechService.updateSpeech(speechToSave);
		alert('Successfully Saved Speech ' + speechToSave.id);
	}

	addSpeech(speech: Speech) {
		speech.id = this.getLatestSpeechId() + 1;
		this.speechService.addSpeech(speech);
		this.selectedSpeech = speech;
		alert('Successfully Created Speech ' + speech.id);
	}

	deleteSpeech(speech: Speech) {
		this.speechService.deleteSpeech(speech);
		this.selectedSpeech = new Speech({});
		alert('Successfully Deleted Speech ' + speech.id);
	}
	private getLatestSpeechId() {
		return Math.max.apply(null, this.speeches.map((obj) => obj.id));
	}
}
