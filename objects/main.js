const person = {
    firstName: 'Sergey',
    lastName: 'Pozharkov',
    year: 1997,
    languages: ['eng', 'rus', 'de'],
    maritalStatus: false,
    greet: function () {
        alert('greet');
    }
}

console.log(person.languages);
person.greet();