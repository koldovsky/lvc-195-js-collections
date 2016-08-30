// Arrays

// var students = [];

// students[0] = 'Vasyl';
// students[1] = 'Petro';
// students.push('Taras');

// console.log("Number of elements: " + students.length);

// for (var j = 0; j < 5; j++) {
//     students.push(prompt("Enter a name: "));
// }

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// Dictionary or HashTable

// var students = {};
// students['AX553'] = 'Vasyl';
// students['AB321'] = 'Petro';
// students['LK111'] = 'Lilia';

// var otherStudents = {
//     'AX553': 'Vasyl',
//     'AB321': 'Petro',
//     'LK111': 'Lilia'
// }

// for (var key in otherStudents) {
//     console.log(key + ': ' + otherStudents[key]);
// }

// Object
// var kuzya = {
//     name: 'Kuzya',
//     color: 'white'
// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//     this.run = function () {
//         console.log(this.name + ' has run!');
//     }
//     return this;
// }

// var pushok = new Cat('Pushok', 'grey');
// var murchik = new Cat('Murchik', 'black');
// pushok.run();
// murchik.run();

// Events
googleLink.addEventListener('click', joke);

function joke(e) {
    alert('It\'s a joke');
    e.preventDefault();
}
