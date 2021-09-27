console.log(Math.abs(-2));
console.log(Math.max(3, 5, 12, 42, 37));
console.log(Math.pow(5, 2));
console.log(Math.ceil(42.22)); // округляет в большую сторону.
console.log(Math.round(32.42)); // округляет к ближайшему целому числу.
console.log(Math.random());

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(15, 42));