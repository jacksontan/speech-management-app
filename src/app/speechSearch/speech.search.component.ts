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
		this.selectedSpeech = speech;
	}

	saveSpeech(savedSpeech: Speech) {
		let isFound = false;
		this.speeches.some((speech) => {
			if(speech.id === savedSpeech.id) {
				speech.content = savedSpeech.content;
				speech.author = savedSpeech.author;
				speech.keywords = savedSpeech.keywords;
				speech.date = savedSpeech.date;
				return isFound = true;
			}
		})
		if(!isFound) {
			this.addSpeech(savedSpeech);
		}
		alert('Successfully Saved Speech ' + savedSpeech.id);
	}

	addSpeech(speech: Speech) {
		speech.id = this.getLatestSpeechId() + 1;
		this.speechService.addSpeech(speech);
	}

	deleteSpeech(deletedSpeech: Speech) {
		let isFound = false;
		this.speeches.splice(this.speeches.findIndex((speech) => speech.id === deletedSpeech.id), 1);
		this.selectedSpeech = new Speech({});
		alert('Successfully Deleted Speech ' + deletedSpeech.id);
	}
	private getLatestSpeechId() {
		return Math.max.apply(null, this.speeches.map((obj) => obj.id));
	}
}
