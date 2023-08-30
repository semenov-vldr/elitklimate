const dataDahatsu = [
    DAHATSU_DHP,
  DAHATSU_DS_I,
  DAHATSU_DA_H,
  DAHATSU_GW_H,
  DAHATSU_DH_CS_A,
  DAHATSU_DH_NP_A,
  DAHATSU_DH_KL_A,
];

const dataDenko = [
    DENKO_KR,
  DENKO_DCS_A,
];

const dataLG = [
  LG_Dual,
]

// Общий массив всех товаров
const productsArr = [
  dataDahatsu,
  dataDenko,
  dataLG,

].flat().flat();

//productsArr = productsArr.flat()

