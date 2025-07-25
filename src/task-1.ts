/*Задача 1. Типізація скалярних значень (файл task-1.ts)



У цьому фрагменті коду оголошені три змінні з різними типами значень: текст, число і булеве значення.



const name = "Alice";
const age = 30;
const isOnline = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);



Завдання:

Додай до кожної змінної явну типізацію.
Переконайся, що TypeScript правильно визначає тип, і не видає помилку.
Залиш назви змінних і їх значення без змін.*/

const name: string = "Alice";
const age: number = 30;
const isOnline: boolean = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);
