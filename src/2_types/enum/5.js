"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsValidEnumValue = void 0;
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
exports.getIsValidEnumValue = getIsValidEnumValue;
// enum Some {
//   key1 = 1,
// }
// Some['key1'] = 1;
// Some[1] = 'Key1'; filter를 사용하여 양방향 -> 단방향으로
