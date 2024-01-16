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
  DAHATSU_DHMULT_OUT,
  DAHATSU_DHMULT_IN,
];

const dataDenko = [
  DENKO_KR,
  DENKO_DU,
  DENKO_DU_I,
  DENKO_GW_I,
  DENKO_DNI,
  DENKO_DCS_A,
  DENKO_DNP_A,
  DENKO_DNMULT_IN,
  DENKO_DNMULT_OUT,
];

const dataEurohoff = [
  EUROHOFF_EV,
  EUROHOFF_EVR_I,
];

const dataLG = [
  LG_Dual,
];

const dataMidea = [
  MIDEA_PARAMOUNT,
  MIDEA_PARAMOUNT_INVERTER,
  MIDEA_UNLIMITED,
];

const dataDaichi = [
  DAICHI_ICE,
  DAICHI_ICE_INVERTER,
  DAICHI_AIR,
  DAICHI_AIR_INVERTER,
];

const dataBosch = [
  BOSCH_CLIMATE_LINE_2000,
];

const dataKentatsu = [
  KENTATSU_ICHI,
  KENTATSU_KANAMI,
  KENTATSU_KANAMI_INVERTER,
];


// Общий массив всех товаров
let productsArr = [
  dataDahatsu,
  dataDenko,
  dataEurohoff,
  dataLG,
  dataMidea,
  dataDaichi,
  dataBosch,
  dataKentatsu,

].flat(Infinity);
