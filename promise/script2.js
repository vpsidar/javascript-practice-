// Nesting promises

function getMePromise() {
    return fetch('/promise/data.json')
}

const promiseObject = getMePromise()

promiseObject.then(result => {
    console.log(result);
    return result.json()
}).then(data2 => {
    console.log('finally', data2);
}).then((res) => {
    console.log('Third nested');
}).catch((error) => {
    console.log('Error');
})

// If we define the nested then the value for first then is passed to the next then
// so basicallly in javascript world fetch will always going to give you promise and 'then' function is always going to give you three kind of result
// 1. It can be normal
// 2. It can be promise
// 3. It can return nothing // by default all fn which does not have return will implicitly return undefined

// so in the first then we can directly acces the vaule return by network so we have to pass the data to the next then 


// Nesting catches

const promiseObject2 = getMePromise()

promiseObject2.then((result) => {
    console.log('Passed',1);
    return result.json();
}).then((data2) => {
    console.log('Passed', 2);
}).then((res) => {
    console.log('Passed', 3);
    throw new Error('yooo');
}).then((es) => {
    console.log('Passed', 4);
}).then((es5) => {
    console.log('Passed', 5);
}).catch((error) => {
    console.log('Someone throws the error');
}).then(resf => {
    console.log('you are fine now')
})

// Here we have manually thrown the error this is block 3 then 4 and 5 will not execute block will not execute and look for the catch block and if after the catch if its find another then sp that will be executed.