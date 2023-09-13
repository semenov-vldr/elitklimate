const dataDahatsu = [
  DAHATSU_DA_H,
  DAHATSU_DA_I,
  DAHATSU_GW_H,
  DAHATSU_DHP,
  DAHATSU_DS_I,

  DAHATSU_DH_CS_A,
  DAHATSU_DH_NP_A,
  DAHATSU_DH_KL_A,
  DAHATSU_DH_KN_CH,
];

const dataDenko = [
  DENKO_KR,
  DENKO_DU,
  DENKO_DCS_A,
];

const dataEurohoff = [
  EUROHOFF_EV,
];

const dataLG = [
  LG_Dual,
];

const dataMidea = [
  MIDEA_MSAG1,
]

const dataDaichi = [
  DAICHI_AIR20AVQ1,
  DAICHI_AIR25AVQS1R_1,
  DAICHI_ICE20AVQ1_1,
]

// Общий массив всех товаров
const productsArr = [
  dataDahatsu,
  dataDenko,
  dataEurohoff,
  dataLG,
  dataMidea,
  dataDaichi,

].flat().flat();

//productsArr = productsArr.flat()

