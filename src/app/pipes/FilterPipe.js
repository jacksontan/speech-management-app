"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, filterText) {
        if (!values || !values.length) {
            return [];
        }
        if (!filterText) {
            return values;
        }
        return values.filter(function (v) {
            var keywords = v.keywords.split(",").map(function (s) { return s.trim().toLowerCase(); });
            return v.content.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
                ('speech ' + v.id).indexOf(filterText.toLowerCase()) >= 0 ||
                keywords.indexOf(filterText.toLowerCase()) >= 0;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({ name: 'filterSpeech' })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=FilterPipe.js.map