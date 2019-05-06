import { createRange } from "./createRange.js";

//Number ranges for the markers
//Marker .png images are generated from this utility
// http://au.gmented.com/app/marker/marker.php
// Currently using AR_MATRIX_CODE_4x4_BCH_13_9_3_0-511/
// This allows for up to 511 individual markers, with error checking (?no idea the benifit)

//EXAMPLES
//Row 1 corresponds to image 0301.png
//ROW 21 => image 0321.png
//LEVEL A => image 040121.png
//LOC 001 => image 0001.png

const ROWS = createRange({ qty: 21, start: 301 });
const LEVELS = createRange({ qty: 24, start: 401 });
const LOCS = createRange({ qty: 24, start: 1 });

export { ROWS, LEVELS, LOCS };
