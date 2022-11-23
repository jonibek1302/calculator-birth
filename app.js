let birthday = prompt("Tug'ilgan sanangizi  kiriting: \n 1-oy, \n 2-kun, \n 3-yil , kiriting  \n Misol uchun:(12.30.2000)") ;
 //let birthday = ("06.13.2002");
let special = new Date(birthday);
let now = Date.now();

let daysbirth = Math.floor((now - special) / 1000 / 60 / 60 / 24 / 365.5);//20
let alldays = Math.floor(daysbirth*365.5);
let nowdays = Math.floor((now - special) / 1000 / 60 / 60 / 24 );
let allnow = nowdays - alldays ;//kun

let timebirth = Math.floor((now - special) / 1000 / 60 / 60 / 24 / 365.5);//20

let alltime = Math.floor((timebirth * 365.5 * 24) + allnow * 24 );
let nowtime = Math.floor((now - special) / 1000 / 60 / 60 );
let limitime  = nowtime - alltime ;

console.log(special);
console.log(now);

console.log( (now - special) / 1000 / 60 / 60 / 24 / 365.5 );
console.log( (now - special) / 1000 / 60 / 60 / 24  );
console.log(daysbirth);
console.log(alldays);
console.log(nowdays);

console.log(`Siz ${daysbirth}-yosh ${allnow}-kun ${limitime}-soatliksiz `);
alert(`Siz ${daysbirth}-yosh ${allnow}-kun ${limitime}-soatliksiz `);
document.write(`Siz ${daysbirth}-yosh ${allnow}-kun ${limitime}-soatliksiz `);












