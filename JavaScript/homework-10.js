// Задача №2

import { products } from './products.js'

// Задача №3 (общие переменные, используются и в задаче №5)

const productsTemplate = document.querySelector('#products-template');
const productsList = document.querySelector('.products-list');

// Задача №4

const productsDescription = products.reduce((acc, product) => {
  acc[product.cardName] = product.cardDescription
  return acc
}, {});
console.log(productsDescription)

// Задача №5

function getCardsCount() {
  let count
  while (true) {
    count = prompt("Сколько карточек отобразить? От 1 до 5")

    if (!count || isNaN(count) || Number(count) < 1 || Number(count) > 5) {
      alert("Введите число от 1 до 5!")
      continue
    }
    return Number(count)
  }
}

function renderProducts(productsArray) {
  productsArray.forEach(product => {
    const productClone = productsTemplate.content.cloneNode(true)
    productClone.querySelector('.card__image').src = product.cardImage
    productClone.querySelector('.card__category').textContent = product.cardCategory
    productClone.querySelector('.card__name').textContent = product.cardName
    productClone.querySelector('.card__description').textContent = product.cardDescription
    productClone.querySelectorAll('.compound__list li').forEach((li, index) => {
      li.textContent = product.compoundList[index]
    })
    productClone.querySelector('.card__price-value').textContent =
      `${product.cardPriceValue.toLocaleString('ru-RU')} ₽`
    productsList.append(productClone)
  })
}

const count = getCardsCount()
renderProducts(products.slice(0, count))