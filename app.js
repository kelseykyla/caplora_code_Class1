 

// maps`
// foreach/
// forin
// forof
// for
// let const var
let food = ['chicken', 'rice', 'ugali', 'spinach'];
let elm = document.getElementById('list');
let u = 0
while (u < 2) {
    console.log(u, 'u');
    for (let index = 1; index < food.length; index++) {
        console.log(index);
        console.log(food[index]);

        elm.innerHTML += `<li>${food[index]} </li><br/>`

    }
    u++
}

food.map((value, index)=>{
    console.log(value,index);
})

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }
for (const iterator of food) {
    console.log(iterator,'for of');
}


let obj = {
    name:'John',
    age:23,
    lives:'Juja',

}

food.forEach(element => {
    console.log(element,'foreach');
});

for (const key in obj) {
    console.log(key, 'keys');
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key], 'value');
        
    }
}
console.log(obj.name);
let j = 0
do{
    console.log(j, 'j');
j++
}while(j<4)