"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Speech_1 = require("../models/Speech");
var SpeechService_1 = require("../services/SpeechService");
var speech_list_component_1 = require("../speechList/speech.list.component");
var speech_form_component_1 = require("../speechForm/speech.form.component");
var ViewSpeechComponent = (function () {
    function ViewSpeechComponent(speechService) {
        this.speechService = speechService;
        this.speechService = speechService;
        this.selectedSpeech = new Speech_1.Speech({});
        this.speeches = speechService.getSpeeches();
    }
    ViewSpeechComponent.prototype.setSpeech = function (speech) {
        this.selectedSpeech = JSON.parse(JSON.stringify(speech));
        ;
    };
    ViewSpeechComponent.prototype.saveSpeech = function (speechToSave) {
        this.speechService.updateSpeech(speechToSave);
        alert('Successfully Saved Speech ' + speechToSave.id);
    };
    ViewSpeechComponent.prototype.addSpeech = function (speech) {
        speech.id = this.getLatestSpeechId() + 1;
        this.speechService.addSpeech(speech);
        this.selectedSpeech = speech;
        alert('Successfully Created Speech ' + speech.id);
    };
    ViewSpeechComponent.prototype.deleteSpeech = function (speech) {
        this.speechService.deleteSpeech(speech);
        this.selectedSpeech = new Speech_1.Speech({});
        alert('Successfully Deleted Speech ' + speech.id);
    };
    ViewSpeechComponent.prototype.getLatestSpeechId = function () {
        return Math.max.apply(null, this.speeches.map(function (obj) { return obj.id; }));
    };
    return ViewSpeechComponent;
}());
ViewSpeechComponent = __decorate([
    core_1.Component({
        selector: 'view-speech',
        templateUrl: './view.html',
        directives: [speech_list_component_1.SpeechListComponent, speech_form_component_1.SpeechFormComponent]
    }),
    __metadata("design:paramtypes", [SpeechService_1.SpeechService])
], ViewSpeechComponent);
exports.ViewSpeechComponent = ViewSpeechComponent;
//# sourceMappingURL=view.component.js.map