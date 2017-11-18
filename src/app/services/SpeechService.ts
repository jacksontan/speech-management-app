import { Injectable } from '@angular/core';
import { Speech } from '../models/Speech';

@Injectable()
export class SpeechService {
	private speechList: Speech[] = [
		{
			id: 1,
			content: 'Hi this is my speech',
			author: 'Jackson Tan',
			keywords: 'firstspeech,help,test',
			date: new Date('2017-01-13')

		},
		{
			id: 2,
			content: 'Hello everyone this is John Doe',
			author: 'John Doe',
			keywords: 'greetings,john,doe',
			date: new Date('2017-02-15')

		},
		{
			id: 3,
			content: 'Ahoy, my mates. This is Captain Juan',
			author: 'Juan Dela Cruz',
			keywords: 'pirate,introduction',
			date: new Date('2017-11-25')

		}
	]
	getSpeeches() {
		return this.speechList;
	}
	addSpeech(speech: Speech) {
		return this.speechList.push(speech);
	}

	updateSpeech(speechToSave: Speech) {
		return this.speechList.some((speech) => {
			if(speech.id === speechToSave.id) {
				speech.content = speechToSave.content;
				speech.author = speechToSave.author;
				speech.keywords = speechToSave.keywords;
				speech.date = speechToSave.date;
				return true;
			}
		})
	}

	deleteSpeech(speechToDelete: Speech) {
		return this.speechList.splice(this.speechList.findIndex((speech) => speech.id === speechToDelete.id), 1);
	}
}