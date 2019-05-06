export function getVisibleMarkers({ cssClass }) {
  //Find the visible Markers
  const markers = [...document.querySelectorAll("a-marker." + cssClass)];
  const visibleMarkers = markers.filter(
    marker => marker.object3D.visible === true
  );
  return visibleMarkers;
}
