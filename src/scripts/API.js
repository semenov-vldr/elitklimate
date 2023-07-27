const API_DAHATSU = "./assets/json/dahatsu.json";
const API_DENKO = "./assets/json/denko.json";
const API_EUROHOFF = "./assets/json/eurohoff.json";
const API_HISENSE = "./assets/json/hisense.json";
const API_KENTATSU = "./assets/json/kentatsu.json";
const API_LG = "./assets/json/lg.json";
const API_MIDEA = "./assets/json/midea.json";

//const API_COMBI = [API_DAHATSU, API_DENKO, API_EUROHOFF, API_HISENSE, API_KENTATSU, API_LG, API_MIDEA];
const API_COMBI = [API_DAHATSU, API_DENKO];

const arr = [];

function getProductCards (API) {
  return fetch(API)
    .then(responce => responce.json())
    .then(cards => {
      arr.push(cards);
      console.log(arr.flat());
    })
    .catch(() => console.log('Ошибка при загрузке данных'));
};


API_COMBI.forEach(api => {
    getProductCards(api)
})


