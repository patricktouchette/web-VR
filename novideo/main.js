const button = document.getElementById("trigger");
button.addEventListener("click", checkMarkers);

const destination = "4";
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const thumbsUp = document.querySelector(".found");
//map
// 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7
//
const scene = document.getElementById("scene");
const markerList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const target = 4;
createMarkers({ parent: scene, list: markerList, target: 4 });

function createMarkers({ parent, list, target }) {
  console.log("scene", scene);
  const html = list
    .map(
      value => `
  <a-marker type="barcode" value="${value}">
  <a-plane
    position=".05 0 -.05"
    rotation="-90 0 0"
    width="1.1"
    height="1.1"
    color =  ${value === target ? "green" : "red"}
    opacity =  0.7;
  ></a-plane>
</a-marker>`
    )
    .join("");

  parent.insertAdjacentHTML("beforeend", html + `<a-entity camera></a-entity>`);
}

function checkMarkers() {
  const markers = [...document.querySelectorAll("a-marker")];
  leftArrow.classList.remove("show");
  rightArrow.classList.remove("show");
  thumbsUp.classList.remove("show");
  const visible = markers.filter(marker => marker.object3D.visible === true);
  const found = visible.filter(
    marker => marker.attributes.value.value === destination
  );

  if (found.length > 0) {
    thumbsUp.classList.add("show");
    return;
  } else {
    visible.forEach(checkLocation);
  }
}

function checkLocation(marker) {
  const loc = marker.attributes.value.value;
  if (loc < destination) {
    rightArrow.classList.add("show");
    leftArrow.classList.remove("show");
  } else if (loc > destination) {
    leftArrow.classList.add("show");
    rightArrow.classList.remove("show");
  }
}

const interval = setInterval(checkMarkers, 1000);

var stats = new Stats();
document.body.appendChild(stats.dom);
// render the scene
onRenderFcts.push(function() {
  renderer.render(scene, camera);
  stats.update();
});
