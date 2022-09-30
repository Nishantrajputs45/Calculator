const textview = document.querySelector(".textview");

var currentVal = "";
var copyCurrentVal = "";
var preValue = "";
var number = [];
var ans;

function insert(digit) {
  number.push(digit);

  if (number.length != 1) {
    currentVal = "";
    textview.value = currentVal;
  }

  for (i = 0; i < number.length; i++) {
    currentVal = currentVal + number[i];
  }

  textview.value = currentVal;
}

function equals() {
  copyCurrentVal = "";
  textview.value = "";

  for (i = 0; i < number.length; i++) {
    copyCurrentVal += number[i];
    preValue += number[i];
  }

  ans = eval(copyCurrentVal);
  copyCurrentVal = ans.toString();
  preValue = copyCurrentVal;
  textview.value = ans;

  while (number.length > 0) {
    number.pop();
  }

  number.push(ans.toString());
}

function clean() {
  textview.value = "";

  while (number.length > 0) {
    number.pop();
  }

  currentVal = "";
  copyCurrentVal = "";
}

function back() {
  number.pop();
  currentVal = "";
  for (i = 0; i < number.length; i++) {
    currentVal = currentVal + number[i];
  }

  textview.value = currentVal;
}
