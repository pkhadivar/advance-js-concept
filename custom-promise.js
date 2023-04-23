

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("it worked."), 300)
})


myPromise.then((data) => console.log(data) )