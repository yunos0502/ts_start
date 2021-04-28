import { getIsValidEnumValue } from "./5";
export {};

enum Fruit {
  Apple,
  Banana,
  Orange,
}

enum Language {
  Korean = 'ko',
  English = 'en',
  Japanese = 'jp',
}

console.log('1 in Fruit: ', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit: ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit: ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Language: ', getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Language: ', getIsValidEnumValue(Language, 'Korean'));
