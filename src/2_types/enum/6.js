"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _5_1 = require("./5");
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log('1 in Fruit: ', _5_1.getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit: ', _5_1.getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit: ', _5_1.getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Language: ', _5_1.getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Language: ', _5_1.getIsValidEnumValue(Language, 'Korean'));
