export const removeMarkers = parent => {
  const markers = [...parent.querySelectorAll("a-marker")];
  markers.forEach(marker => parent.removeChild(marker));
};
