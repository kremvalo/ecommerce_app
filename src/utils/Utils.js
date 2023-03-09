export function currencyFormat(num) {
  let aux = parseInt(num);
  return "$" + aux.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const trimEllip = (string, length) => {
  return string.length > length ? `${string.substring(0, length)}...` : string;
};

export const replaceText = (string, textOne, textTwo, optional) => {
  let newText;
  if (!optional) {
    newText = string.replace(textOne, textTwo);
  } else {
    newText = string.replace(textOne, textTwo).replace(optional, textTwo);
  }

  return newText;
};
