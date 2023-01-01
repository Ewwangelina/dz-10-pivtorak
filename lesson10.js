/*1/Вывести на страницу в одну строку через запятую числа от 10 до 20.*/
let array = []
for (let i = 10; i < 21; i++ ) {
    array.push(i)
    console.log(i)
} alert (array)

/*2/Вывести квадраты чисел от 10 до 20.*/
let array1 = []
for (let i = 10; i < 21; i++ ) {
    array1.push(i**2)
} alert (array1)

/*3/Вывести таблицу умножения на 7.*/
let array3 = []
for (let i = 1; i < 11; i++ ) {
    array3.push(i*7)
} alert(array3)

/*4/Найти сумму всех целых чисел от 1 до 15.*/
let array4 = 0
for (let i = 1; i < 16; i++ ) {
    array4 += i 
} alert(array4)

/*5/Найти произведение всех целых чисел от 15 до 35.*/
let array5 = 1
for (let i = 15; i < 36; i++ ) {
    array5 = i*array5
} alert(array5)

/*6/Найти среднее арифметическое всех целых чисел от 1 до 500.*/
let array6 = 0
for (let i = 1; i < 501; i++ ) {
    array6 += i
} alert(array6 / 500) 

/*7/Вывести сумму только четных чисел в диапазоне от 30 до 80.*/
let array7 = []
for (let i = 30; i < 81; i++ ) {
    if (i % 2 === 0) {
        array7.push(i)
    } 
} alert(array7)

/*8/Вывести все числа в диапазоне от 100 до 200 кратных 3.*/
let array8 = []
for (let i = 100; i < 201; i++ ) {
    if (i % 3 === 0) {
        array8.push(i)
    } 
} alert(array8)

/*9/Дано натуральное число. Найти и вывести на страницу все его делители.*/
/*10/Определить количество его четных делителей.*/
/*11/Найти сумму его парных делителей.*/
let array9 = []
let row = 40
let result = []
let ar = 0
for (let i = 1; i <= row; i++ ) {
    if (row % i === 0) {
        array9.push(i)  
        if (i % 2 === 0) {
            result.push(i)
            ar += i
        }
    } 
} alert(`${array9}, ${result}, ${ar}`)

/*12/Напечатайте полную таблицу умножения от 1 до 10.*/
let array10 = []
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        array10.push(`${i*j}`)
    } array10.push(`\n`)
} alert(array10)


