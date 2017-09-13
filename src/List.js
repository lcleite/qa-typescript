"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List() {
        this.list = [];
    }
    List.prototype.addItem = function (item) {
        this.list.push(item);
    };
    List.prototype.addItemAtIndex = function (item, index) {
        this.list.splice(index, 0, item);
    };
    List.prototype.removeItemAtIndex = function (index) {
        this.list.splice(index, 1);
    };
    List.prototype.getElements = function () {
        return this.list;
    };
    List.prototype.getLength = function () {
        return this.list.length;
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=List.js.map