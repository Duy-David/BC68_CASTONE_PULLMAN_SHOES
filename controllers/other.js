let i = Number(document.querySelector(".number").value);
function plus() {
  i++;
  document.querySelector(".number").value = i;
}
function reduce() {
  if (i > 1) {
    i--;
    console.log(i);
    document.querySelector(".number").value = i;
  } else {
    document.querySelector(".number").value = 1;
  }
}
