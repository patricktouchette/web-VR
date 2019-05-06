import { initControls } from "./controls.js";
import { ROWS, LEVELS, LOCS } from "./settings.js";

import { createMarkers } from "./createMarkers.js";
import { checkMarkers } from "./checkMarkers.js";
import { getVisibleMarkers } from "./getVisibleMarkers.js";
import { showLocInstructions, showLocDirection } from "./locUi.js";
import { getInstruction } from "./getInstruction.js";
import { showInstruction } from "./showInstruction.js";

//Initialize the UI controls (full screen, buttons, etc...)
initControls();

//Add markers to scene
const scene = document.getElementById("scene");
createMarkers({
  parent: scene,
  list: ROWS,
  target: ROWS[8],
  targetColor: "yellow",
  cssClass: "row",
});

createMarkers({
  parent: scene,
  list: LOCS,
  target: LOCS[4],
  targetColor: "green",
  cssClass: "loc",
});

// STATE
const state = {
  rowFound: false,
  locFound: false,
  row: ROWS[8],
  loc: LOCS[4],
  instruction: "Trouver la loc 005",
  sku: "123123DS",
  qty: 5,
};

const loop = () => {
  const rowMarkers = getVisibleMarkers({ cssClass: "row" });
  const locMarkers = getVisibleMarkers({ cssClass: "loc" });

  state.rowFound = checkMarkers({ target: state.row, markers: rowMarkers });
  state.locFound = checkMarkers({ target: state.loc, markers: locMarkers });

  // if (rowFound) showRowInstructions();
  if (state.locFound) showLocInstructions(locMarkers);
  if (!state.locFound)
    showLocDirection({ markers: locMarkers, target: state.loc });

  state.instruction = getInstruction(state);
  showInstruction(state);
};

let interval = setInterval(loop, 1000);

//Clear Ar.js warnings
console.clear();
