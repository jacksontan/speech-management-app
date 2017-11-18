"use strict";
var Speech = (function () {
    function Speech(data) {
        if (data) {
            this.id = data.id;
            this.content = data.content;
            this.author = data.author;
            this.keywords = data.keywords;
            this.date = data.date;
        }
    }
    Speech.create = function (data) {
        return new Speech(data);
    };
    return Speech;
}());
exports.Speech = Speech;
//# sourceMappingURL=Speech.js.map