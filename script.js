// 1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let obj1 = {
   name: "Taras",
   age: 29,
   status: true
}
let obj2 = {
   computer: "dell",
   prise: 25000,
   color: "black"
}
let obj3 = {
   movie: "Warcraft",
   hero: "ork",
   statusGame: true
}
let obj4 = {
   house: 120,
   position: "center",
   status: false
}
let obj5 = {
   kurs: "Okten",
   prise: 25000,
   status: true
}
// 2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man1 = {
   name: 'kokos',
   skills: ['java', 'js'],
   wife: { name: 'cherry' }
};
let man2 = {
   id: 1,
   color: ['red', 'green'],
   position: { top: "20px", left: "10px" }
}
let man3 = {
   class: 'txt',
   fontSize: [20, "px"],
   text: { p: 'sans-serif' }
};
let man4 = {
   apple: 'kokos',
   add: [23, 45],
   size: { width: 20, height: 50 }
};
let man5 = {
   car: 'Honda',
   color: ['red', 'green', 'blue'],
   prise: { car1: 100000, car2: "100500" }
};
// 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const key in obj1) {
   console.log(key);
}
for (const key in obj2) {
   console.log(key);
}
for (const key in obj3) {
   console.log(key);
}
for (const key in obj4) {
   console.log(key);
}
for (const key in obj5) {
   console.log(key);
}
for (const key in man1) {
   console.log(key);
}
for (const key in man2) {
   console.log(key);
}
for (const key in man3) {
   console.log(key);
}
for (const key in man4) {
   console.log(key);
}
for (const key in man5) {
   console.log(key);
}
// 4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log("++++++++++++++++++");
console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.keys(obj3));
console.log(Object.keys(obj4));
console.log(Object.keys(obj5));
console.log(Object.keys(man1));
console.log(Object.keys(man2));
console.log(Object.keys(man3));
console.log(Object.keys(man4));
console.log(Object.keys(man5));
// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
   {
      model: "honda",
      year: 2010,
      power: 200,
      color: "red"
   },
   {
      model: "bugatti",
      year: 2020,
      power: 250,
      color: "greeen"
   },
   {
      model: "subaru",
      year: 2000,
      power: 150,
      color: "blue"
   },
   {
      model: "lada",
      year: 1992,
      power: 50,
      color: "Дитячий понос"
   },
   {
      model: "mercedes",
      year: 2021,
      power: 300,
      color: "tomato"
   },
   {
      model: "volvo",
      year: 1995,
      power: 100,
      color: "black"
   },
   {
      model: "wolcwagen",
      year: 2000,
      power: 170,
      color: "white"
   },
   {
      model: "toyota",
      year: 2016,
      power: 180,
      color: "yellow"
   },
   {
      model: "tesla",
      year: 2019,
      power: 190,
      color: "red"
   },
   {
      model: "velo",
      year: 1700,
      power: 1,
      color: "green"
   }
]
// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
   {
      name: "lviv",
      population: 721301,
      country: "ukrein",
      region: "Galician"
   },
   {
      name: "Odesa",
      population: 993120,
      country: "ukrein",
      region: "Одеська область"
   },
   {
      name: "Kharkiv",
      population: 1419000,
      country: "ukrein",
      region: "Харківська обл"
   },
   {
      name: "sushno",
      population: 502,
      country: "ukrein",
      region: "Червоноградський район"
   }
]
// 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars1 = [
   {
      model: "Subaru",
      age: 2010,
      power: 150,
      color: "red",
      driver: {
         name: "Taras",
         age: 29,
         sex: "man",
         experience: true
      }
   },
   {
      model: "bmw",
      age: 2020,
      power: 200,
      color: "green",
      driver: {
         name: "Taras",
         age: 29,
         sex: "man",
         experience: true
      }
   },
   {
      model: "mercedes",
      age: 2020,
      power: 250,
      color: "white",
      driver: {
         name: "Taras",
         age: 29,
         sex: "man",
         experience: true
      }
   }
]
// 8- проитерировать каждый массив из задания 5,6,7 при помощи while.
let r = 0;
let b = 0;
let p = 0;
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
while (r < cars.length) {
   console.log(cars[r]);
   r++
}
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
while (b < cities.length) {
   console.log(cities[b]);
   b++
}
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
while (p < cars1.length) {
   console.log(cars1[p]);
   p++
}
// 9- проитерировать каждый массив из задания 5,6,7 при помощи for .
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
for (let i = 0; i < cars.length; i++) {
   console.log(cars[i]);
}
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
for (let i = 0; i < cities.length; i++) {
   console.log(cities[i]);
}
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
for (let i = 0; i < cars1.length; i++) {
   console.log(cars1[i]);
}
// 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
for (const iterator of cars) {
   console.log(iterator);
}
console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
for (const iterator of cities) {
   console.log(iterator);
}
console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
for (const iterator of cars1) {
   console.log(iterator);
}
// 11- взять объекты из задания 1 и превратить каждый в json.
console.log("***********************");
let strObj1 = JSON.stringify(obj1);
console.log(strObj1);
console.log("***********************");
let strObj2 = JSON.stringify(obj2);
console.log(strObj2);
console.log("***********************");
let strObj3 = JSON.stringify(obj3);
console.log(strObj3);
console.log("***********************");
let strObj4 = JSON.stringify(obj4);
console.log(strObj4);
console.log("***********************");
let strObj5 = JSON.stringify(obj5);
console.log(strObj5);
// 12- взять json из задания 11 и превратить их обратно в объекты.
console.log("-----------------------");
let parseObj1 = JSON.parse(strObj1);
console.log(parseObj1);
console.log("-----------------------");
let parseObj2 = JSON.parse(strObj2);
console.log(parseObj2);
console.log("-----------------------");
let parseObj3 = JSON.parse(strObj3);
console.log(parseObj3);
console.log("-----------------------");
let parseObj4 = JSON.parse(strObj4);
console.log(parseObj4);
console.log("-----------------------");
let parseObj5 = JSON.parse(strObj5);
console.log(parseObj5);

// 13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
let newMas = [];
for (const iterator of cars) {
   newMas.push(JSON.stringify(iterator))
}
console.log("{{{{{{{{{{{{{{{{{{{{{{{");
console.log(newMas);
// 14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
let strSities = [];
for (let i = 0; i < cities.length; i++) {
   strSities.push(JSON.stringify(cities[i]));
}
console.log("+++++++++++++++++++++");
console.log(strSities);
// 15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let der = [];
for (const iterator of cars1) {
   der.push(JSON.stringify(iterator));
}
console.log("##################");
console.log(der);
// 16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let user = [
   {
      name: "Taras",
      skills: ["HTML", "CSS", "JS", "NOD", "PHP", "SQL"],
      age: 29,
      status: true
   },
   {
      name: "Serg",
      skills: ["HTML", "JS", "NOD", "SQL",],
      age: 20,
      status: true
   },
   {
      name: "Nazar",
      skills: ["HTML", "CSS", "JS", "NOD", "PHP", "SQL", "ANGULAR"],
      age: 33,
      status: false
   }
]
console.log("++++++++++++++");
for (let i = 0; i < user.length; i++) {
   console.log(user[i]);
   for (let z = 0; z < user[i].skills.length; z++) {
      console.log(user[i].skills[z]);
   }
}

// 17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let userTur = [
   {
      name: "Taras",
      skills: ["HTML", "CSS", "JS", "NOD", "PHP", "SQL"],
      age: 29,
      status: true
   },
   {
      name: "Serg",
      skills: ["HTML", "JS", "NOD", "SQL",],
      age: 20,
      status: true
   },
   {
      name: "Nazar",
      skills: ["HTML", "CSS", "JS", "NOD", "PHP", "SQL", "ANGULAR"],
      age: 33,
      status: false
   }
]
console.log("*******************");
let newUserMAs = [];
for (const iterator of userTur) {
   newUserMAs.push(iterator.skills)
}
console.log(newUserMAs);

// 18- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users1 = [
   { name: 'vasya', adres: "Lviv", age: 31, status: false, skills: ['java', 'js'] },
   { name: 'petya', adres: "Kiev", age: 30, status: true, skills: ['java', 'js', 'html'] },
   { name: 'kolya', adres: "Sushno", age: 29, status: true, skills: ['mysql', ',mongo'] },
   { name: 'olya', adres: "Radechiv", age: 28, status: false, skills: ['java', 'js'] },
   { name: 'max', adres: "Cherwonograd", age: 30, status: true, skills: ['mysql', ',mongo'] }];
console.log("{{{{{{{{{{{{{{{");
for (const key in users1) {
   for (const iterator of users1[key].skills) {
      console.log(iterator);
   }
}

let users = [{
   name: 'vasya',
   age: 31,
   status: false,
   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
   name: 'petya',
   age: 30,
   status: true,
   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
   name: 'kolya',
   age: 29,
   status: true,
   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
   name: 'olya',
   age: 28,
   status: false,
   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
   name: 'max',
   age: 30,
   status: true,
   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
   name: 'anya',
   age: 31,
   status: false,
   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
   name: 'oleg',
   age: 28,
   status: false,
   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
   name: 'andrey',
   age: 29,
   status: true,
   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
   name: 'masha',
   age: 30,
   status: true,
   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
   name: 'olya',
   age: 31,
   status: false,
   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
   name: 'max',
   age: 31,
   status: true,
   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// адресу в масиві не бло і його просто добавив
let arr = [];
for (const iterator of users) {
   arr.push(iterator.address);
}
console.log(arr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
let userblock = document.createElement("div");
userblock.id = "userblock";
document.body.appendChild(userblock);
for (let i = 0; i < users.length; i++) {

   let txt = document.createElement("div");
   txt.id = "txt";

   txt.innerText = "name " + users[i].name + " adres " + users[i].address.city + " country " + users[i].address.country + " street " + users[i].address.street + " age " + users[i].age + " status " + users[i].status;

   userblock.appendChild(txt);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
   let name = document.createElement("div");
   let age = document.createElement("div");
   let status = document.createElement("div");
   let address = document.createElement("div");
   let city = document.createElement("span");
   let country = document.createElement("span");
   let street = document.createElement("span");
   let houseNumber = document.createElement("span")

   name.className = "name";
   age.className = "age";
   status.className = "status";
   address.className = "address";
   city.className = "city";
   country.className = "country";
   street.className = "street";
   houseNumber.className = "houseNumber";

   name.innerText = " name : " + users[i].name;
   age.innerText = " age : " + users[i].age;
   status.innerText = " status : " + users[i].status;

   city.innerText = " city : " + users[i].address.city;
   country.innerText = " country : " + users[i].address.country;
   street.innerText = " street : " + users[i].address.street;
   houseNumber.innerText = " houseNumber : " + users[i].address.houseNumber;

   userblock.appendChild(name);
   userblock.appendChild(age);
   userblock.appendChild(status);
   userblock.appendChild(address);
   address.appendChild(city);
   address.appendChild(country);
   address.appendChild(street);
   address.appendChild(houseNumber);

}


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
   { id: 1, name: 'vasya', age: 31, status: false },
   { id: 2, name: 'petya', age: 30, status: true },
   { id: 3, name: 'kolya', age: 29, status: true },
   { id: 4, name: 'olya', age: 28, status: false },
];
let citiesWithId = [
   { user_id: 3, country: 'USA', city: 'Portland' },
   { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
   { user_id: 2, country: 'Poland', city: 'Krakow' },
   { user_id: 4, country: 'USA', city: 'Miami' },
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [
//    {
//       id: 1,
//       name: 'vasya',
//       age: 31,
//       status: false,
//       address: { user_id: 1, country: 'Ukraine', city: 'Ternopil' }
//    }]
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
   usersWithCities.push(usersWithId[i]);
}
for (let i = 0; i < usersWithCities.length; i++) {
   if (usersWithCities[0].id === citiesWithId[i].user_id) {
      usersWithCities[0].adres = citiesWithId[i];
   } else if
      (usersWithCities[1].id === citiesWithId[i].user_id) {
      usersWithCities[1].adres = citiesWithId[i];
   } else if
      (usersWithCities[2].id === citiesWithId[i].user_id) {
      usersWithCities[2].adres = citiesWithId[i];
   } else if
      (usersWithCities[3].id === citiesWithId[i].user_id) {
      usersWithCities[3].adres = citiesWithId[i];
   }
}
console.log("____________________");
console.log(usersWithCities);



// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let selectorBlock = document.createElement("div");
// selectorBlock.id = "selectorBlock";
// selectorBlock.className = "selector";
// selectorBlock.innerText = "Якийсь корявий текст";
// document.body.appendChild(selectorBlock);

// let selectorMas = [];
// let txtId = document.getElementById("selectorBlock");
// selectorMas.push(txtId.innerText);

// let txtClass = document.getElementsByClassName("selector")[0];
// selectorMas.push(txtClass.innerText);

// let txtTagName = document.getElementsByTagName("div")[66];
// selectorMas.push(txtTagName.innerText);
// console.log(selectorMas);

// - змінити цей текст використовуючи селектори id, class,  tag

// let massel = [];
// txtId.innerText = "Ще корявіший текст";
// txtClass.innerText = "Ще корявіший текст";
// txtTagName.innerText = "Ще корявіший текст";
// massel.push(txtId.innerText);
// massel.push(txtClass.innerText);
// massel.push(txtTagName.innerText);
// console.log(massel);

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// txtId.style.width = 50 + "%";
// txtClass.style.height = 50 + "px";

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let table = document.createElement("div");
table.id = "table";
document.body.appendChild(table);
table.style.width = 100 + "%";
table.style.height = 40 + "px";
table.style.border = 2 + "px solid red";
table.style.display = "flex";

let table1 = document.createElement("div");
table1.id = "table1";
table.appendChild(table1);
table1.style.width = 33 + "%";
table1.style.height = 100 + "%";
table1.style.borderRight = 2 + "px solid green";
table1.style.backgroundColor = "red";


let table2 = document.createElement("div");
table2.id = "table2";
table.appendChild(table2);
table2.style.width = 33 + "%";
table2.style.height = 100 + "%";
table2.style.borderRight = 2 + "px solid green";
table2.style.backgroundColor = "green";

let table3 = document.createElement("div");
table3.id = "table3";
table.appendChild(table3);
table3.style.width = 33 + "%";
table3.style.height = 100 + "%";
table3.style.backgroundColor = "blue";

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let fastTable = document.createElement("table");
fastTable.id = "fastTable";
document.body.appendChild(fastTable);
fastTable.style.width = 100 + "%";
fastTable.style.height = 40 + "px";
fastTable.style.marginTop = 10 + "px";
fastTable.style.marginTop = 10 + "px";
fastTable.cellPadding = "7";
fastTable.border = "2";


let section;
let section1;
for (let i = 0; i < 10; i++) {
   section = document.createElement("tr");
   section.className = "section";
   fastTable.appendChild(section);
   section.style.width = 100 + "%";
   section.style.height = 30 + "px";
   section.innerText = "sgsdfsdfsdf";
   for (let z = 0; z < 3; z++) {
      section1 = document.createElement("td");
      section1.className = "section1";
      section.appendChild(section1);
      section1.style.height = 30 + "px";
      section1.innerText = "sgsdfsdfsdf";

   }
}


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// 1table- таблиця 10tr-блок заголовок значення 10th заголовок  10*5td занчення
let tableTwoo = document.createElement("table");
tableTwoo.id = "tableTwoo";
document.body.appendChild(tableTwoo);
tableTwoo.style.marginTop = 30 + "px"
tableTwoo.style.width = 100 + "%";
tableTwoo.cellPadding = "5";
tableTwoo.border = "1";

let tr10;
let th10;
let td5;

for (let i = 0; i < 10; i++) {
   // 10 блоків

   tr10 = document.createElement("tr");
   tr10.className = "tr10";
   tableTwoo.appendChild(tr10);

   // 10 заголовків
   th10 = document.createElement("th");
   th10.className = "th10";
   tr10.appendChild(th10);
   th10.innerText = "Заголовок" + [i];

   for (let i = 0; i < 5; i++) {
      // 5текстів
      td5 = document.createElement("td");
      td5.className = "td5";
      tr10.appendChild(td5);
      td5.innerText = "Якийсь текст" + [i];
   }
}

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let tableThre = document.createElement("table");
// tableThre.id = "tableThre";
// document.body.appendChild(tableThre);
// tableThre.style.marginTop = 30 + "px"
// tableThre.style.width = 100 + "%";
// tableThre.cellPadding = "5";
// tableThre.border = "1";

// let trBlo;
// let thn;
// let tdm;

// let promptHeder = +prompt("Кількість заголовків");
// let promptBody = +prompt("Кількість рядків");

// for (let i = 0; i < promptHeder; i++) {
//    // 10 блоків
//    trBlo = document.createElement("tr");
//    trBlo.className = "trBlo";
//    tableThre.appendChild(trBlo);

//    // 10 заголовків
//    thn = document.createElement("th");
//    thn.className = "thn";
//    trBlo.appendChild(thn);
//    thn.innerText = "Кака маляка" + [i];

//    for (let i = 0; i < promptBody; i++) {
//       // 5текстів
//       tdm = document.createElement("td");
//       tdm.className = "tdm";
//       trBlo.appendChild(tdm);
//       tdm.innerText = "Срака пердяка" + [i];
//    }
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
let obub = document.querySelectorAll("[class]");
console.log(obub);
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let allp = document.querySelectorAll("p");
for (const iterator of allp) {
   iterator.innerText = "hello oktenweb!";
}

//  - знайти всі div та змінити ім колір на червоний

// let alldiv = document.querySelectorAll("div");
// for (const iterator of alldiv) {
//    iterator.style.backgroundColor = "red";
// }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let h1 = document.querySelectorAll("h2");

let ul = document.createElement("ul");
ul.className = "ul";
let connt = document.getElementById("content");
connt.appendChild(ul);
console.log(h1);
for (const iterator of h1) {
   let li = document.createElement("li");
   li.className = "li";
   ul.appendChild(li);
   li.innerText = iterator.innerText;
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цьому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
   {
      title: 'Первое правило Бойцовского клуба.',
      body: 'Никому не рассказывать о Бойцовском клубе.'
   },
   {
      title: 'Второе правило Бойцовского клуба.',
      body: 'Никогда никому не рассказывать о Бойцовском клубе.'
   },
   {
      title: 'Третье правило Бойцовского клуба.',
      body: 'В схватке участвуют только двое.'
   },
   {
      title: 'Четвертое правило Бойцовского клуба.',
      body: 'Не более одного поединка за один раз.'
   },
   {
      title: 'Пятое правило Бойцовского клуба.',
      body: 'Бойцы сражаются без обуви и голые по пояс.'
   },
   {
      title: 'Шестое правило Бойцовского клуба.',
      body: 'Поединок продолжается столько, сколько потребуется.'
   },
   {
      title: 'Седьмое правило Бойцовского клуба.',
      body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
   },
   {
      title: 'Восьмое и последнее правило Бойцовского клуба.',
      body: 'Новичок обязан принять бой.'
   },

];
/* <div id="wrap">
            <div class="rules rule1">
                <h2>Первое правило Бойцовского клуба.</h2>
                <p>Никому не рассказывать о Бойцовском клубе.</p>
            </div> */
// </div>        
let wrap = document.createElement("div");
wrap.id = "wrap";
document.body.appendChild(wrap);

for (let i = 0; i < rules.length; i++) {
   let rules = document.createElement("div");
   rules.className = `rules rule ${i + 1}`;
   wrap.appendChild(rules);

   let h2 = document.createElement("h2");
   h2.innerText = "Первое правило Бойцовского клуба.";
   rules.appendChild(h2);

   let p = document.createElement("p");
   p.innerText = "Никому не рассказывать о Бойцовском клубе.";
   rules.appendChild(p);
}


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// let userFetch = [];

// let blockUser = document.createElement("div");
// blockUser.id = "blockUser";
// document.body.appendChild(blockUser);

// fetch(`https://jsonplaceholder.typicode.com/users`)
//    .then(r => r.json())
//    .then(result => {
//       for (const key in result) {
//          userFetch[key] = result[key]
//       }

//       for (let i = 0; i < userFetch.length; i++) {
//          let user = document.createElement("div");
//          user.id = "user";
//          user.style.fontSize = 20 + "px";
//          user.innerText = userFetch[i]["name"];
//          blockUser.appendChild(user);

//          let address = document.createElement("div");
//          address.id = "address";
//          address.innerText = "adres";
//          address.style.border = 1 + "px solid black" 
//          address.style.backgroundColor = "#8b4897";
//          user.appendChild(address);

//          let company = document.createElement("div");
//          company.id = "company";
//          company.innerText = "company";
//          company.style.backgroundColor = "red";
//          user.appendChild(company);

//          let name = document.createElement("div");
//          name.id = "name";
//          name.innerText = userFetch[i]['company']['name'];
//          company.appendChild(name);

//          let city = document.createElement("div");
//          city.id = "city";
//          city.innerText = userFetch[i]['address']['city'];
//          address.appendChild(city);

//          let street = document.createElement("div");
//          street.id = "street";
//          street.innerText = userFetch[i]['address']['street'];
//          address.appendChild(street);

//          let email = document.createElement("div");
//          email.id = "email";
//          email.innerText = userFetch[i]['email'];
//          user.appendChild(email);
//       }
//    })

//    console.log(userFetch);
// console.log("++++++++++++++");

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let masPost = [];

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//    .then(Response => Response.json())
//    .then(Response => {
//       for (const key in Response) {
//          masPost[key] = Response[key];
//       }

//       let post = document.createElement("div");
//       post.id = "post";
//       document.body.appendChild(post);

//       for (const iterator of masPost) {
//          // body
//          // id: 1
//          // title
//          // userId
//          let body = document.createElement("div");
//          body.id = "body";
//          body.innerText = `body ${iterator.body}`
//          post.appendChild(body);

//          let id = document.createElement("div");
//          id.id = "id";
//          id.innerText = `id: ${iterator.id}`
//          post.appendChild(id);

//          let title = document.createElement("div");
//          title.id = "title";
//          title.innerText = `title: ${iterator.title}`
//          post.appendChild(title);

//          let userId = document.createElement("div");
//          userId.id = "userId";
//          userId.innerText = `userId: ${iterator.userId}`
//          post.appendChild(userId);
//       }
//    })


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let comentMas = [];

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//    .then(Response => Response.json())
//    .then(Response => {

//       for (const iterator of Response) {
//          comentMas.push(iterator)
//       }

//       let comentArr = document.createElement("div");
//       comentArr.id = "comentArr";
//       document.body.appendChild(comentArr);

//       for (let i = 0; i < 10; i++) {
//          // body
//          // email
//          // id
//          // name
//          // postId

//          let coment = document.createElement("div");
//          coment.id = "coment";
//          comentArr.appendChild(coment);

//          let body = document.createElement("div");
//          body.id = "body";
//          body.innerText = `body: ${comentMas[i]['body']}`
//          coment.appendChild(body);

//          let email = document.createElement("div");
//          email.id = "email";
//          email.innerText = `email: ${comentMas[i]['email']}`
//          coment.appendChild(email);

//          let id = document.createElement("div");
//          id.id = "id";
//          id.innerText = `id: ${comentMas[i]['id']}`
//          coment.appendChild(id);

//          let name = document.createElement("div");
//          name.id = "name";
//          name.innerText = `name: ${comentMas[i]['name']}`
//          coment.appendChild(name);

//          let postId = document.createElement("div");
//          postId.id = "postId";
//          postId.innerText = `postId: ${comentMas[i]['postId']}`
//          coment.appendChild(postId);
//       }
//    })

// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка :
// в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

let posts = [];
let comments = [];

fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(postsData => posts = postsData)
   .then(() => fetch('https://jsonplaceholder.typicode.com/comments'))
   .then(response => response.json())
   .then(commentsData => comments = commentsData)
   .then(() => {
      for (const post of posts) {
         if (!post.comments) {
            post.comments = [];
         }
         for (const comment of comments) {
            if (comment.postId === post.id) {
               post.comments.push(comment);
            }
         }
      }
      console.log(posts);
      let allpost = document.createElement("div");
      allpost.id = "allpost";
      document.body.appendChild(allpost);

      for (const iterator of posts) {
         //    // post
         //    // body
         //    // id
         //    // title
         //    // userId

         //    // coment
         //    // body
         //    // email
         //    // id
         //    // name
         //    // postId
         let post = document.createElement("div");
         post.id = "post";
         allpost.appendChild(post);

         let body = document.createElement("div");
         body.id = "body";
         body.innerText = `body ${iterator.body}`;
         post.appendChild(body);

         let id = document.createElement("div");
         id.id = "id";
         id.innerText = `id: ${iterator.id}`;
         post.appendChild(id);

         let title = document.createElement("div");
         title.id = "title";
         title.innerText = `title: ${iterator.title}`;
         post.appendChild(title);

         let userId = document.createElement("div");
         userId.id = "userId";
         userId.innerText = `userId: ${iterator.userId}`;
         post.appendChild(userId);

         let coment = document.createElement("div");
         coment.id = "coment";
         coment.style.backgroundColor = "green";
         for (const ter of iterator.comments) {            
            coment.innerText += `comments : ${ter.name}`;
         }
         post.appendChild(coment);
      }
   })