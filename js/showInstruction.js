const instructionEl = document.querySelector(".instruction");
const instructionQtyEl = document.querySelector(".instruction-qty");

export const showInstruction = state => {
  const { rowFound, locFound, row, loc, sku, qty, instruction } = state;

  //Instruction
  instructionEl.textContent = instruction;

  //QTY
  if (rowFound && locFound) {
    instructionQtyEl.textContent = qty + "x";
    instructionQtyEl.classList.add("show");
  } else {
    instructionQtyEl.classList.remove("show");
  }
};
