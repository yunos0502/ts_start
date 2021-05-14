export {};

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  }
}

// public, protected, private

class Programmer extends Person {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    super.sayHello();
    console.log('저는 프로그래머입니다.')
  }
}

class Docter extends Person {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    super.sayHello();
    console.log('저는 의사입니다.');
  }
}

const programmer = new Programmer('홍길동');
programmer.sayHello();
// console.log(programmer.name);
// const docter: Person = new Docter('홍길동');
// docter.sayHello();
