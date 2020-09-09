 let superheroes = require('superheroes');
 let supervillains = require('supervillains');
 //console.log(superheroes.random());

 supervillains.all.forEach(supervillain => {
    console.log(supervillain);
});
console.log(supervillains.random());

superheroes.all.forEach(hero => {
    console.log(hero);
});

console.log(`${superheroes.random()} fights ${supervillains.random()}`);


 



