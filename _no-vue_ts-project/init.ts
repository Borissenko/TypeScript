//JS с использованием typScript-кода.

//предварительная декларация интерфейса
interface Person {
  firstName: string;
  lastName: string;
}

//собственно JS с указанием типов данных
class Student {
  fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
