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
		let clonedSpeech = JSON.parse(JSON.stringify(speech));
		clonedSpeech.id = this.getLatestSpeechId() + 1;
		this.speechService.addSpeech(clonedSpeech);
		this.selectedSpeech = clonedSpeech;
		alert('Successfully Created Speech ' + clonedSpeech.id);
	}

	deleteSpeech(speech: Speech) {
		this.speechService.deleteSpeech(speech);
		this.selectedSpeech = new Speech({});
		alert('Successfully Deleted Speech ' + speech.id);
	}

	shareSpeech(speech: Speech) {
		window.open('mailto:', '_self');
		let emailTo = '';
		let emailBody = speech.content;
		let emailSub = speech.author + ' has shared his Speech ' + speech.id + ' to you'
		location.href = "mailto:" + emailTo + '?subject=' + emailSub + '&body=' + emailBody;
	}

	private getLatestSpeechId() {
		return Math.max.apply(null, this.speeches.map((obj) => obj.id));
	}
}
