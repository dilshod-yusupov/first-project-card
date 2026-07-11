function printWeather(cityName, temperature) {
console.log(`В Городе ${cityName} сейчас ${temperature} градусов`);
}
// Тестируем логику:
printWeather('Москва', 20);
printWeather('Санкт-Петербург', 15);

const SPEED_OF_LIGHT = 299792458;
function printSpeedOfLight(currentSpeed) {

if (currentSpeed > SPEED_OF_LIGHT) {
console.log("Сверхсветовая скорость");
} else if (currentSpeed === SPEED_OF_LIGHT) {
console.log("Скорость света");
} else {
console.log("Субсветовая скорость");
} 
}
// Тестируем логику:
printSpeedOfLight(300000000);
printSpeedOfLight(299792458);
printSpeedOfLight(1000000);

const productName = "iPhone 14 Pro";
const productPrice = 999;
function tryBuyProduct(userBudget) {
    if (userBudget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`);
    } else {
        const debt = productPrice - userBudget;
        console.log(`Вам не хватает ${debt}, пополните баланс`);    
    }
    }
// Тестируем логику:
tryBuyProduct(1000);
tryBuyProduct(500);

const CRITICAL_FUEL_LEVEL = 10;
function fillGasTank(fuelType, tankCapacity, currentFuelLevel) {

if (currentFuelLevel < CRITICAL_FUEL_LEVEL) {
    const fuelNeeded = tankCapacity - currentFuelLevel;
    console.log(`Критический уровень топлива! До полного бака нужно залить еще ${fuelNeeded} л.`);
} else if (currentFuelLevel >= CRITICAL_FUEL_LEVEL && currentFuelLevel < tankCapacity) {
    const fuelNeeded = tankCapacity - currentFuelLevel;
    console.log(`Уровень топлива в норме. В бак поместится еще ${fuelNeeded} л.`);
} else {
    console.log('Бак полон! Заправка не нужна.');
}
}
// Добавляем 3 новые переменные (Задание 7):
const testFuelType = "АИ-95";
const testCapacity = 60;
let testFuelLevel = 5;

fillGasTank(testFuelType, testCapacity, testFuelLevel);

// Тестируем логику:
fillGasTank("АИ-95", 60, 40);
fillGasTank("Дизель", 70, 70);  
