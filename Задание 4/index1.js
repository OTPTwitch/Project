let name = prompt("Введите имя: ");
let surname = prompt("Введите фамилию: ");
let name1 = name.toUpperCase();
let surname1 = surname.toUpperCase();
let name2 = name1.substr(1);
let surname2 = surname1.substr(1);
name2 = name2.toLowerCase();
surname2 = surname2.toLowerCase();
let name3 = name[0];
let surname3 = surname[0];
let name4 = name3 + name2;
let surname4 = surname3 + surname2;
alert(name4 +" "+ surname4)