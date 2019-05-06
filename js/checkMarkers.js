export function checkMarkers({ target, markers }) {
  const foundTarget = markers.filter(
    marker => Number(marker.attributes.value.value) === target
  );
  //Check if we found the target
  if (foundTarget.length > 0) return true;
  return false;
}
