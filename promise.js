const myTask1 = new Promise((resolve, reject) => {
    if(Math.random() * 10 > 5){
        resolve("The promise succeeded");
    } else{
        reject("Some error happened");
    }
})

Executor()

async function Executor(){
    console.log("Started with async function")
    await myTask1.then((data) => console.log(data))
    await myTask1.catch((err) => console.log(err))
    console.log("Some Task 1")
    console.log("Some Task 2")
    console.log("Some Task 3")
    console.log("End")
}

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });

console.log("Started request...")

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

