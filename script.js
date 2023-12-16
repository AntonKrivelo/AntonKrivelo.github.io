//modal
const btnModal = document.querySelectorAll('[data-modal]');
const modalPage = document.querySelector('.overlay');
const closeModal = document.querySelector('[data-close]');
const menu = document.querySelector('.menu__list');
const hamburger = document.querySelector('.hamburger');
const menuItem = document.querySelectorAll('.menu__item');

//hamburger 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu__list_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
    })
})
// end hamburger



// modal
btnModal.forEach((btn) => {                // метод перебора всех кнопок 
    btn.addEventListener('click', () => {
        modalPage.classList.add('show');
        modalPage.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // скролл убирает при открытии
    });
});

function hideModal() {
    closeModal.addEventListener('click', () => {
        modalPage.classList.add('hide');
        modalPage.classList.remove('show');
        document.body.style.overflow = ''; // обратно возвращает скролл
    });
};

modalPage.addEventListener('click' , (e) => {
    if(e.target === modalPage) {    // позволяет убирать модальное окно при нажатии на подложку
        modalPage.classList.add('hide');
        modalPage.classList.remove('show');
        document.body.style.overflow = '';
    }
});
hideModal();

// end modal





//filter - возвращает новый массив 
const names = ['anton', 'ann', 'pac', 'voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
    
});
console.log(shortNames);

//map -  возвращает новый массив
const answers = ['AnToN', 'AnAn', 'hello'];

const result = answers.map(function (item) {
    return item.toLowerCase();
});
console.log(result);

//some - перебирает массив если один элемент по условию выполнит то будет true
//every - если все элементы буду подходить под условие только тогда вернет true 

const art = [4, 'anton', 'vold'];
// проверяем есть ли в переменной хотя бы одно число
// console.log(art.some(item => typeof(item) === 'number'));
console.log(art.every(item => typeof(item) === 'number'));

// reduce собирает массив в одно целое 

const array = [4, 1, 3, 5, 6, 8];
// получить сумму всех этих элементов
//sum - первый раз он 0 
// current - это каждый элемент который приходит из массива
//0    4
//4    1
//5    3
//8    5     
const res = array.reduce((sum, current) => {
    return sum + current, 3;   // 3 начальное значение 
});
console.log(res);
//
// со строками 
const string = ['apple', 'orange', 'plum'];
const resFruit = string.reduce((sum, current) => {
    return `${sum}, ${current}`;
});
console.log(resFruit);

// перебор не в том формате 
const obj = {
    anton: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
// получается массив 
const newArr = Object.entries(obj)
// получаем значение с persone отфильтровываем 

.filter(item => item[1] === 'persone') // получаем persone 
.map(item => item[0]); // получаем только имена


// .filter(item => {    
//     return item[1] === 'persone';   
// });
// .map(item => {
//     return item[0];
// });
console.log(newArr);


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
const filmsGood = Object.entries(films)

const showGoodFilms = films.filter(function(item) {
    return item[2];
});
console.log(showGoodFilms);




// промисы

// console.log('Запрос данных...')
// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2500
//         };

//         resolve(product);
//     }, 2000);
// });
// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// Promise.all([test(1000), test(2000)]).then(() => {

// });