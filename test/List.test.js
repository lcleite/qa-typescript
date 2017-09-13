"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var List_1 = require("../src/List");
describe('List test', function () {
    var list;
    before(function () {
        list = new List_1.List();
    });
    it('It should match an empty list', function () {
        chai_1.expect(list.getElements()).to.members([]);
    });
    it('It should match ["A", "B", "C"]', function () {
        list.addItem("A");
        list.addItem("B");
        list.addItem("C");
        chai_1.expect(list.getElements()).to.members(["A", "B", "C"]);
    });
    it('It should remove item "B"', function () {
        list.removeItemAtIndex(1);
        chai_1.expect(list.getElements()).to.members(["A", "C"]);
    });
    it('It should add item "B" and match ["A", "B", "C"] again', function () {
        list.addItemAtIndex("B", 1);
        chai_1.expect(list.getElements()).to.members(["A", "B", "C"]);
    });
    it('It should return length 3', function () {
        chai_1.expect(list.getLength()).to.equals(3);
    });
});
//# sourceMappingURL=List.test.js.map