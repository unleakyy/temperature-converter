const radioBtns = document.querySelectorAll("input[type='radio']");
const result = document.getElementById("result");
const userInput = document.getElementById("userInput");
const convertBtn = document.getElementById("convertBtn");
let sign = "K";
let userValue;
convertBtn.addEventListener("click", () => {
  if (isValidNumber(userInput.value.trim())) {
    radioBtns.forEach((radio) => {
      if (radio.checked) {
        let radioId = radio.id;
        result.value = `${convertTemperature(userValue, radioId)}°${sign}`;
      }
    });
  }
});

function isValidNumber(user) {
  if (!isNaN(Number(user)) && user != "") {
    userValue = Number(user);
    return true;
  } else {
    result.value = "";
    userInput.value = null;
    userInput.setAttribute("placeholder", "Not a valid number!");
    return false;
  }
}

function convertTemperature(user, radioType) {
  let x;
  if (radioType == "CtoF") {
    sign = "F";
    // return (9 / 5) * user + 32;
    x = (9 / 5) * user + 32;
    return x.toFixed(2);
  } else if (radioType == "FtoC") {
    sign = "C";
    // return (5 / 9) * (user - 32);
    x = (5 / 9) * (user - 32);
    return x.toFixed(2);
  } else if (radioType == "KtoF") {
    sign = "F";
    // return (9 / 5) * (user - 273.15) + 32;
    x = (9 / 5) * (user - 273.15) + 32;
    return x.toFixed(2);
  } else if (radioType == "KtoC") {
    sign = "C";
    // return user - 273.15;
    x = user - 273.15;
    return x.toFixed(2);
  } else if (radioType == "CtoK") {
    // return user + 273.15;
    x = user + 273.15;
    return x.toFixed(2);
  } else if (radioType == "FtoK") {
    // return (5 / 9) * (user - 32) + 273.15;
    x = (5 / 9) * (user - 32) + 273.15;
    return x.toFixed(2);
  }
}
