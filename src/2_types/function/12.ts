export {};

// function getText({name, age = 15, language}: {name: string, age?: number, language?: string}):string {
//   const nameText = name.substr(0, 10);
//   const ageText = age >= 35 ? 'senior' : 'junior';
//   return `name: ${nameText}, age: ${ageText}, language: ${language}`;
// }

function getText(name: string, age = 15, language?: string):string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
