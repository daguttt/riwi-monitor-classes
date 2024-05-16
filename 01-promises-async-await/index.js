// const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
// const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

// console.log(promise);

// -*******************************************************************************-

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
const promise = fetch(pokeApiUrl); // -> Promise<Reponse>

console.log(promise);

promise.then((response) => {
  console.log(response);
});
