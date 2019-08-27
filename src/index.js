/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array));
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {

    let prevResult,
        i = 0;

    if (initial) {
        prevResult = initial;
    } else {
        prevResult = array[0];
        i++;
    }

    for (i; i < array.length; i++) {
        prevResult = fn(prevResult, array[i], i, array);
    }

    return prevResult;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [], 
        upper;
    
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            upper = prop.toUpperCase();
            arr.push(upper);
        }
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    
    let newArray = [];
    let beginIndex = undefined,
        endIndex = undefined;
    
    if (from === undefined) {
        beginIndex = 0;
    } else {
        if (from >= 0) {
            if (from >= array.length) {
                beginIndex = array.length;
            } else {
                beginIndex = from;
            }
        }
    
        if (from < 0) {
            if (from * -1 > array.length) {
                beginIndex = 0;
            } else {
                beginIndex = array.length - (from * -1);
            }
        }
    }
    
    if (to === undefined) {
        endIndex = array.length;
    } else {
        if (to > 0) {
            if (to >= array.length) {
                endIndex = array.length;
            } else {
                endIndex = to;
            }
        }
        if (to < 0) {
            if (to * -1 > array.length) {
                endIndex = 0;
            } else {
                endIndex = array.length - (to * -1);
            }
        }
    }
  
    if (beginIndex < endIndex) {
        for (beginIndex; beginIndex < endIndex; beginIndex++) {
            newArray.push(array[beginIndex]);
        }
    } else {
        return [];
    }
  
    return newArray;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            return target[prop] = value ** 2;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
