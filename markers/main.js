import { ROWS, LEVELS, LOCS } from "../js/settings.js";

import { page } from "./page.js";

// const url = './markers/AR_MATRIX_CODE_4x4_0-500/'
const url = "./AR_MATRIX_CODE_4x4_BCH_13_9_3_0-511/";

page({
  parent: document.body,
  number: 1,
  range: ROWS,
  title: "row",
  url,
  offset: 300,
});

page({
  parent: document.body,
  number: 2,
  range: LOCS,
  title: "loc",
  url,
});
