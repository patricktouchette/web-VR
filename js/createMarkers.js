export function createMarkers({ parent, list, target, targetColor, cssClass }) {
  const html = list
    .map(
      value => `
  <a-marker class="${cssClass}" type="barcode" value="${value}">
  <a-plane
    position="0.05 0 -0.05"
    rotation="-90 0 0"
    width="1.1"
    height="1.1"
    color =  ${value === target ? targetColor : "red"}
    opacity =  0.7;
  ></a-plane>
</a-marker>`
    )
    .join("");

  parent.insertAdjacentHTML("beforeend", html);
}
