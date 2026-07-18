// Задача №3 Создал объект на основе свои данные

const user = {
    name: `Dilshod`,
    lastName: `Yusupov`,
    age: 21,
    email: `dilshod.yusupov@example.com`,
    phone: `+798901234567`,
    job: `Frontend Developer`,
};

console.log(user)

// Задача №4 Создал объект auto и добавил в него свойство carOwner, которое ссылается на объект user

const auto = {
    brand: `Toyota`,
    model: `Camry`,
    year: 2020,
    color: `Black`,
    mileage: 15000,
    price: 25000,
};

auto.carOwner = user.name;

console.log(auto)

// Задача №5 Cоздал функцию addMaxSpeed, которая принимает объект auto в качестве аргумента и добавляет в него свойство maxSpeed со значением 200, если оно еще не существует. Затем вызываем функцию addMaxSpeed с объектом auto и выводим обновленный объект в консоль.

function addMaxSpeed(auto) {
    if (auto.maxSpeed === undefined) {
        auto.maxSpeed = 200;
    }
};

addMaxSpeed(auto);
console.log(auto)
console.log(`Максимальная скорость автомобиля ${auto.brand} ${auto.model} составляет ${auto.maxSpeed} км/ч.`);

// Задача №6 Создал функцию showPropertyValues, которая принимает объект и ключ в качестве аргументов

function showPropertyValues(obj, key) {
    console.log(obj[key]);            
}

showPropertyValues(auto, 'brand');

// Задача №7 Cоздал массив productName, который содержит названия продуктов, и вывел его в консоль.

const productName = ["Хлеб", "Молоко", "Яйца", "Сыр", "Масло"];

console.log(productName);

// Задача №8 Создал массив movies, который содержит объекты с информацией о фильмах, и вывел его в консоль. Затем добавил новый объект фильма в массив movies и снова вывел его в консоль.

const movies = [
    {
        name: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Science Fiction",
        rating: 8.8
    },
    {
        name: "Iron Man",
        director: "Jon Favreau",
        year: 2008,
        genre: "Action",
        rating: 7.9
    },
    {
        name: "interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Science Fiction",
        rating: 8.6
    }
];

movies.push({
    name: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    rating: 9.0
});

console.log(movies);

// Задача №9 создал массив marvelMovies, который содержит объекты с информацией о фильмах Marvel, и объединил его с массивом movies в новый массив allMovies. Затем вывел allMovies в консоль.

const marvelMovies = [
    {
        name: "Iron Man",
        director: "Jon Favreau",
        year: 2008,
        genre: "Action",
        rating: 7.9
    },
    {
        name: "The Avengers",
        director: "Joss Whedon",
        year: 2012,
        genre: "Action",
        rating: 8.0     
    }
];

const allMovies = [...movies, ...marvelMovies];

console.log(allMovies);

// Задача №10 Cоздал функцию rareMovies, которая принимает массив allMovies в качестве аргумента и возвращает новый массив.

function rareMovies (allMovies) {
    const updatedMovies = allMovies.map(movie => {
        if (movie.rating < 8) {
            return { ...movie, isRare: true };
        } else {
            return { ...movie, isRare: false };
        }
    });

    return updatedMovies;   
}
console.log(rareMovies(allMovies));