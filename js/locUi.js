const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const thumbsUp = document.querySelector(".thumbsup");

//Hide UI elements
function hideSigns() {
  leftArrow.classList.remove("show");
  rightArrow.classList.remove("show");
  thumbsUp.classList.remove("show");
}

//LOC FOUND
export const showLocInstructions = () => {
  hideSigns();
  showThumbsUp();
};

function showThumbsUp() {
  thumbsUp.classList.add("show");
}

//LOC NOT FOUND
export const showLocDirection = ({ markers, target }) => {
  hideSigns();
  const direction = checkDirection({ markers, target });
  showDirection(direction);
};

function checkDirection({ markers, target }) {
  let direction;
  markers.forEach(marker => {
    direction = checkMarkerValue({ marker, target });
    return;
  });
  return direction;
}

function checkMarkerValue({ marker, target }) {
  const value = marker.attributes.value.value;
  if (value < target) return "right";
  if (value > target) return "left";
}

function showDirection(dir) {
  if (dir === "left") leftArrow.classList.add("show");
  if (dir === "right") rightArrow.classList.add("show");
}
