export function intlRound(numero, decimales = 2, usarComa = false) {
  var opciones = {
    maximumFractionDigits: decimales,
    useGrouping: false,
  };
  usarComa = usarComa ? "es" : "en";
  return new Intl.NumberFormat(usarComa, opciones).format(numero);
}
