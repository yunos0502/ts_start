export {};

export function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}

// enum Some {
//   key1 = 1,
// }

// Some['key1'] = 1;
// Some[1] = 'Key1'; filter를 사용하여 양방향 -> 단방향으로
