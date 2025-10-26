function somar(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }

  if (arg1 === Infinity || arg2 === Infinity) {
    return "Erro";
  }

  if (arg1 === -Infinity || arg2 === -Infinity) {
    return "Erro";
  }

  if (isNaN(arg1) || isNaN(arg2)) {
    return "Erro";
  }

  return arg1 + arg2;
}

function subtrair(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }
  if (arg1 === Infinity || arg2 === Infinity) {
    return "Erro";
  }
  if (arg1 === -Infinity || arg2 === -Infinity) {
    return "Erro";
  }

  if (isNaN(arg1) || isNaN(arg2)) {
    return "Erro";
  }
  return arg1 - arg2;
}

function multiplicar(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }
  if (arg1 === Infinity || arg2 === Infinity) {
    return "Erro";
  }
  if (arg1 === -Infinity || arg2 === -Infinity) {
    return "Erro";
  }

  if (isNaN(arg1) || isNaN(arg2)) {
    return "Erro";
  }
  return arg1 * arg2;
}

function dividir(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number" || arg2 === 0) {
    return "Erro";
  }
  if (arg1 === -Infinity || arg2 === -Infinity) {
    return "Erro";
  }

  if (isNaN(arg1) || isNaN(arg2)) {
    return "Erro";
  }
  if (arg1 === Infinity || arg2 === Infinity) {
    return "Erro";
  }
  return arg1 / arg2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
