import {userlist, active} from './db.js'
//primitívek: 1 értékük lehet
//ezek típusai:
//const után az értéket nem lehet megváltoztatni, ha már egyszer adtunk neki értéket
//erre van a let kulcsszó ami után később is meglehet változatni az értéket
//ebben a nyelvben minden objektum
const isActivated = true; //typusa: bool
const userName = 'Jeremy'; //string
const userCount = 15; //number
const nothing = null; //object
let base; //undefined

console.log(typeof isActivated);
console.log(typeof userName);
console.log(typeof userCount);
console.log(typeof nothing);
console.log(typeof base);

//prototype
//this: mindig az a szám lesz amire meghívjuk a mod metódust
//
Number.prototype.mod= function(divider)
{
    return this % divider;
};
console.log( userCount.mod(4));
console.log(userlist[0].age.mod(2))


console.log(userlist[0].name);

//Collections
//1 változóba több értékek lehetnek (pl.tömb)
//nincs megkötés milyen típusú értékeket rakunk bele
const numbers = [3, 5, 7, [true, 'Marika'], 99, 0];

console.log( numbers[3][1]);
console.log (numbers.length); //tömb hossz
console.log(numbers[3]);

console.log ( userlist[2].age );
const key = 'name';
console.log( userlist[2][key]) //írja ki a 2es litából a kulcsot a 'key't azaz a nevét
