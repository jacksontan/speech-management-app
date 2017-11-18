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
var speech_form_component_1 = require("../speechForm/speech.form.component");
var SubmitSpeechComponent = (function () {
    function SubmitSpeechComponent(speechService) {
        this.speechService = speechService;
        this.speechService = speechService;
        this.speeches = speechService.getSpeeches();
        this.selectedSpeech = new Speech_1.Speech({});
    }
    SubmitSpeechComponent.prototype.addSpeech = function (speech) {
        speech.id = this.getLatestSpeechId() + 1;
        this.speechService.addSpeech(speech);
        this.selectedSpeech = new Speech_1.Speech({});
        alert('Successfully Saved Speech ' + speech.id);
    };
    SubmitSpeechComponent.prototype.getLatestSpeechId = function () {
        return Math.max.apply(null, this.speeches.map(function (obj) { return obj.id; }));
    };
    return SubmitSpeechComponent;
}());
SubmitSpeechComponent = __decorate([
    core_1.Component({
        selector: 'submit-speech',
        templateUrl: './submit.html',
        directives: [speech_form_component_1.SpeechFormComponent]
    }),
    __metadata("design:paramtypes", [SpeechService_1.SpeechService])
], SubmitSpeechComponent);
exports.SubmitSpeechComponent = SubmitSpeechComponent;
//# sourceMappingURL=submit.component.js.map