// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr1 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr1[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

let each = function(startArr, f){return f(startArr)};
let arr = [64, 49, 36, 25, 16];
let myFunc = function(a){
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));



let assert = require('chai').assert

describe('sum', function() {

	it('Функция возвращает true', function() {
		assert.equal(sum(2, 2), true);
	});
});

describe('num', function() {

	it('Переменная num должна быть равна 5', function() {
		assert.equal(num, 5);
	});
});	
	
describe('each', function() {

	it('Функция each выдает массив', function() {
		assert.typeOf(arr, 'Array');
	
	});

	it('Длина массива - пять элементов', function() {
		assert.lengthOf(arr, 5);
	});	

	it('Из элементов массива получены квадратные корни', function() {
		function makeTest() {
			for (let i = 0; i <= arr.length; i++) {
		    	assert.equal(arr[i] === Math.sqrt(arr[i]));
		  	}
		}
	});	
});		
	




