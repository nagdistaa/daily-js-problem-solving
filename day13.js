// ! My Solution
function basicOp(operation, value1, value2) {
  return operation == "+"
    ? value1 + value2
    : operation == "*"
    ? value1 * value2
    : operation == "/"
    ? value1 / value2
    : operation == "-"
    ? value1 - value2
    : null;
}

// ! Another Solution

function basicOp(o, a, b) {
    return eval(a+o+b);
  }