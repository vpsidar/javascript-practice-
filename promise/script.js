function getMePromise() {
    return fetch('http://34.456.355.55/promise/data12.json')
}
console.log(getMePromise())

// A Promise can be any state from these three
// 'Pending' | 'Resolved' | 'Rejected'

//One Way
// getMePromise().then(result => {
//     console.log(result)
// })

// Another way
const anotherPromiseObject = getMePromise();

console.log(anotherPromiseObject);

anotherPromiseObject.then(result => {
    console.log(result)
}).catch((error) => {
    console.log('promise is failed')
})

//Lets write a function which accept the promise as argument and add one on the return value of that promise

function addMoreToPromiseResult(promise) {
    return promise.then(result => result + 1)
}