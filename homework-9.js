// Задача №2 Создать массив чисел от 1-10 фильтировать начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumber = numbers.filter(number => number >= 5);

console.log(newNumber)

// Задача №3 Создать массив строк и проверить через метод .includes()

const products = [`Хлеб`,`Молоко`,`Фрукты`,`Мясо`,`Манго`]
const newProducts = products.includes(`Молоко`)

console.log(newProducts)

// Задача №4 Разворот 2 полученных массива

function myReverseFunction(anyArray) {
    return anyArray.toReversed();
};

const reversedNumbers = myReverseFunction(numbers);
const reversedProducts = myReverseFunction(products);

console.log(reversedNumbers)
console.log(reversedProducts)

// Задача №6 Экспорт и импорт массива с коментариями 

import { comments } from "./comment.js";

// Задача №7 Вывести те коменти чей почта заканчивается на .com

function emailCom(anyArray) {
    return anyArray.filter(comments => comments.email.endsWith('.com'))
};

const filterEmailCom = emailCom(comments)

console.log(filterEmailCom)

// Задача №8 Перебрать массив использую ef else 

    const updatedComments = comments.map(comment => {
    let postId;
    if (comment.id <= 5) {
        postId = 2;
    } else {
        postId = 1;
    }

    return {
        ...comment,
        postId: postId
    };
});

console.log(updatedComments);

// Задача №9 Проекция данных через .map() — формирование нового массива объектов, содержащих только ключи id и name.

const simplifiedComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(simplifiedComments);

// Задача №10 Валидация длины строки — перебор массива через .map() и добавление булевого флага isInvalid (true, если body.length > 180).

const checkedComments = comments.map(comment => {
  let isInvalid;

  if (comment.body.length > 180) {
    isInvalid = true;
  } else {
    isInvalid = false;
  }

  return {
    ...comment,
    isInvalid: isInvalid
  };
});
console.log(checkedComments)

// Задача №11 Трансформация массива — извлечение списка всех email-адресов двумя способами: с помощью метода сворачивания .reduce() и через .map().

const emailsViaMap = comments.map(comment => comment.email);

console.log(emailsViaMap);

// Задача №12

const emailsString = emailsViaMap.join(', ');

console.log(emailsString);