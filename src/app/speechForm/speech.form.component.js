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
var SpeechFormComponent = (function () {
    function SpeechFormComponent() {
        this.onsave = new core_1.EventEmitter();
        this.onsaveasnew = new core_1.EventEmitter();
        this.ondelete = new core_1.EventEmitter();
        this.selectedspeech = new Speech_1.Speech({});
    }
    SpeechFormComponent.prototype.save = function () {
        this.onsave.emit(this.selectedspeech);
    };
    SpeechFormComponent.prototype.saveAsNew = function () {
        this.onsaveasnew.emit(this.selectedspeech);
    };
    SpeechFormComponent.prototype.delete = function () {
        this.ondelete.emit(this.selectedspeech);
    };
    return SpeechFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Speech_1.Speech)
], SpeechFormComponent.prototype, "selectedspeech", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpeechFormComponent.prototype, "onsave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpeechFormComponent.prototype, "onsaveasnew", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpeechFormComponent.prototype, "ondelete", void 0);
SpeechFormComponent = __decorate([
    core_1.Component({
        selector: 'speech-form',
        templateUrl: './speech-form.html'
    }),
    __metadata("design:paramtypes", [])
], SpeechFormComponent);
exports.SpeechFormComponent = SpeechFormComponent;
//# sourceMappingURL=speech.form.component.js.map