// Promise Object
// const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
// const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

// console.log(promise);

// -*******************************************************************************-
// Response Object

// const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
// const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

// console.log(promise);

// promise.then((response) => {
//   console.log(response);
// });

// -*******************************************************************************-
// Show data with .then()
// const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
// const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

// console.log(promise);

// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// -*******************************************************************************-
// Show data with async/await

// const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
// const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

// console.log(promise);

// async function getPokemons() {
//   const response = await promise; // after await -> Response
//   const data = await response.json(); // after await -> Object (data)
//   console.log(data);
// }
// getPokemons();

// -*******************************************************************************-
// Example creating a promise (.then())

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     const message = 'This is my resolved data';
//     resolve(message);
//   }, 1500);
// });

// promise.then((message) => {
//   console.log(message);
// });

// -*******************************************************************************-
// Example creating a promise (async/await)

function generatePromiseMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = 'This is my resolved data';
      resolve(message);
    }, 1500);
  });
}

async function getMessage() {
  const message = await generatePromiseMessage();
  console.log(message);
}
getMessage();
