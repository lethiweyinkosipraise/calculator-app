function press(value) {
  const screen = document.getElementById("screen");

  if (screen.value === "0") {
    screen.value = value;
  } else {
    screen.value += value;
  }
}

function calculate() {
  const screen = document.getElementById("screen");

  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

function clearScreen() {
  document.getElementById("screen").value = "0";
}
