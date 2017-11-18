"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SpeechService = (function () {
    function SpeechService() {
        this.speechList = [
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
        ];
    }
    SpeechService.prototype.getSpeeches = function () {
        return this.speechList;
    };
    SpeechService.prototype.addSpeech = function (speech) {
        return this.speechList.push(speech);
    };
    SpeechService.prototype.updateSpeech = function (speechToSave) {
        return this.speechList.some(function (speech) {
            if (speech.id === speechToSave.id) {
                speech.content = speechToSave.content;
                speech.author = speechToSave.author;
                speech.keywords = speechToSave.keywords;
                speech.date = speechToSave.date;
                return true;
            }
        });
    };
    SpeechService.prototype.deleteSpeech = function (speechToDelete) {
        return this.speechList.splice(this.speechList.findIndex(function (speech) { return speech.id === speechToDelete.id; }), 1);
    };
    return SpeechService;
}());
SpeechService = __decorate([
    core_1.Injectable()
], SpeechService);
exports.SpeechService = SpeechService;
//# sourceMappingURL=SpeechService.js.map