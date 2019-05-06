export const initControls = () => {
  const button = document.getElementById("fullScreen");
  let fullScreen = false;

  button.addEventListener("click", () => {
    if (fullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    fullScreen = !fullScreen;
  });
};
