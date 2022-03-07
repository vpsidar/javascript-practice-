// use case of Promise.all()

// This utitlity function is used to fetch and wait for multiple promises . 
// in our program we might have a scenario where we want to  process all promises combinely. 
// or else you are making three network request and you want to start all of them at same point of time and process their Response and return as single response   

async function getData() {
    // const promise1  = await fetch('/promise/data.json');
    // const data1 = await promise1.json()
    // const promise2 = await fetch('/promise/data1.json');
    // const data2 = await promise2.json()    
    // const  promise3 = await fetch('/promise/data2.json');
    // const data3 = await promise3.json()
    // console.log(data1,data2,data3);

    // another way

    const promise1  = fetch('/promise/data.json');
    const promise2 = fetch('/promise/data1.json');
    const  promise3 =  fetch('/promise/data2.json');
    // await promise1
    // await promise2
    // await promise3  // This is little bit cleaner but you can do it in more better way

    const promiseAll = Promise.all([promise1, promise2, promise3])
    const responses = await promiseAll
    const jsons = await Promise.all(responses.map(t => t.json()))
    console.log(jsons)



}
getData();