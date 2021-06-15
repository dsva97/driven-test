export function intlRound(numero, decimales = 2, usarComa = false) {
  var opciones = {
    maximumFractionDigits: decimales,
    useGrouping: false,
  };
  usarComa = usarComa ? "es" : "en";
  const result = new Intl.NumberFormat(usarComa, opciones).format(numero);
  return result % 1 === 0 ? `${result}.00` : result;
}
