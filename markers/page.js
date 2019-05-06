export const page = ({ parent, number, range, title, url, offset = 0 }) => {
  const pageEl = document.createElement("div");
  pageEl.id = "page" + number;
  pageEl.setAttribute("class", "page");
  parent.appendChild(pageEl);
  const html = range
    .map((v, i) => {
      const zeroes = v >= 100 ? "" : v >= 10 ? "0" : "00";
      const img = url + `${zeroes + v}.png`;
      return `
        <div>
          <p>${title} ${zeroes}${v - offset}</p>
          <img src="${img}"</img>
        </div>`;
    })
    .join("");
  pageEl.insertAdjacentHTML("beforeend", html);
};
