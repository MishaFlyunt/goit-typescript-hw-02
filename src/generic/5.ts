/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, V> {
  key: T;
  value: V;
}

let a: KeyValuePair<string, string> = {
  key: "2",
  value: "4",
};

export {};
