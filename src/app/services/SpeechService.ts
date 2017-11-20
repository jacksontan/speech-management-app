import { Injectable } from '@angular/core';
import { Speech } from '../models/Speech';

@Injectable()
export class SpeechService {
	private speechList: Speech[] = [
		{
			id: 1,
			title: "Coffee a day keeps sleepiness away",
			content: 'Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class.[10] It is the world\'s most widely consumed psychoactive drug. Unlike many other psychoactive substances, it is legal and unregulated in nearly all parts of the world. There are several known mechanisms of action to explain the effects of caffeine. The most prominent is that it reversibly blocks the action of adenosine on its receptor and consequently prevents the onset of drowsiness induced by adenosine. Caffeine also stimulates certain portions of the autonomic nervous system.',
			author: 'Jackson Tan',
			keywords: 'caffeine,coffee,awake',
			date: new Date('2016-01-13')

		},
		{
			id: 2,
			title: "Sweet tooth",
			content: 'The cocoa bean, also called cacao bean,[1]',//' cocoa (/\ˈkoʊ.koʊ/), and cacao (/kə\ˈkaʊ/), is the dried and fully fermented seed of Theobroma cacao, from which cocoa solids and, because of the seed\'s fat, cocoa butter can be extracted.[2] The beans are the basis of chocolate, and of such Mesoamerican foods as mole and tejate.',
			author: 'John Doe',
			keywords: 'cocoa,bean,chocolate',
			date: new Date('2015-02-15')

		},
		{
			id: 3,
			title: "All about Milk",
			content: 'Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who breastfeed) before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother\'s antibodies to its young and can reduce the risk of many diseases. It contains many other nutrients[1] including protein and lactose.',
			author: 'Juan Dela Cruz',
			keywords: 'milk,milky,calcium,bone',
			date: new Date('2014-11-25')

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
				speech.title = speechToSave.title;
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