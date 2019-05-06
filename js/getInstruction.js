export const getInstruction = state => {
  const { rowFound, locFound, row, loc, sku, qty } = state;
  let instruction;
  if (!rowFound) return `Aller à la rangée ${row - 300}`;
  if (rowFound && !locFound) return `Trouver la loc ${loc}`;
  if (rowFound && locFound) return `Prendre le SKU ${sku}`;
  return instruction;
};
