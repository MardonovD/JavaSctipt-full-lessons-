// let ism = "Doston";
// let yosh = 20;
// yosh = 21;
// console.log(ism, yosh);

/*const familiya = "Mardonov";
console.log(familiya);

var joy = "Bukhara";
joy = "Toshkent";
console.log(joy);*/

let ism = "Doston";

let familiya = "Mardonov";

let fullName = ism + " " + familiya;

// console.log(fullName);

//getting charts
// console.log(fullName[0]);

//getting length
// console.log(fullName.length);

//string methods => funcsiyaga uxshash ish bajaradi.
// Harflarni kotta qiladi toUpperCase();
// console.log(fullName.toUpperCase());

//kichik Haft qilib beradi toLowerCase();
// let kichikHarf = fullName.toLowerCase();
// console.log(kichikHarf);

// let email = "mardonovdoston@gmail.com";

// indexOf bizga elemnt nechanchi urunda turganini bilib beradi.
// let index = email.indexOf("@");
// let indexFull = fullName.indexOf("@");
// agar berilgan malumotni topa olmasa -1 qayataradi...
// console.log(index);
// console.log(indexFull);

let email = "mardonovdoston69@gmail.com";
// Ko'p ishlatiladigan String methodlari...

//lastIndexOf()
console.log(email.lastIndexOf("o")); //--> Oxirgi kelgan o ni olmoqda

//indexOf() --> birinchi kelgan natijani oladi.
console.log(email.indexOf("o")); //--> birinchi kelgan o ni olyapdi

//slice()
console.log(email.slice(0, 2)); //-- > Ikki kirmaydi oraliqda
console.log(email.slice(5)); // --> bu 5 symboldan keyingi barcha symbollarni oladi
console.log(email); //-> uzgarmadi demak slice immutable ekan.

//substr() pachti slice bilan bir xil ishlidi.
console.log(email.substr(2, 5)); // --> 2 chi symboldan boshlab beshta sym bol oladi

//replace()
console.log(email.replace("m", "n")); // uzgartirish uchun symvollarni uzgartirib variableni burunligicha qaytaradi.

//charAt() -- > bu doimo birinchi symbolni olish uchun ishlatiladi.
console.log(email.charAt());

//toUpperCase() and toLowerCase()

//trim()

//splice()
