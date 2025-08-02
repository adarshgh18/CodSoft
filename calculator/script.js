let expression = "";

function press(val) {
  expression += val;
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
    expression = "";
  } catch {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}