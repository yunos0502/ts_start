export {};

class Person {
  private name: string;
  // #name: string;
  constructor(name: string) {
    this.name = name;
    // this.#name = name;
  }
  sayHello() {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    // console.log(`안녕하세요. 저는 ${this.#name}입니다.`);
  }
}

const person = new Person('홍길동');
// console.log(person.name);
// console.log(person.#name);
