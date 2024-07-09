<<<<<<< HEAD
let i = Number(document.querySelector(".number").value);
function plus() {
  i++;
  document.querySelector(".number").value = i;
=======
let currentPrice = Number(document.getElementById("price-current").value);
let oldPrice = Number(document.getElementById("price-old").value);
let i = Number(document.querySelector(".number").value);
function plus() {
  i++;
  let totalCurrentPrice = i * currentPrice;
  let totalOldPrice = i * oldPrice;
  document.querySelector(".number").value = i;
  document.getElementById("price-current").innerHTML = totalCurrentPrice;
  document.getElementById("price-old").innerHTML = totalOldPrice;
>>>>>>> ceff05f31e894a25d9d2ac7cbd6e1794872ea7c0
}
function reduce() {
  if (i > 1) {
    i--;
    console.log(i);
<<<<<<< HEAD
    document.querySelector(".number").value = i;
=======
    let totalCurrentPrice = i * currentPrice;
    let totalOldPrice = i * oldPrice;
    document.querySelector(".number").value = i;
    document.getElementById("price-current").innerHTML = totalCurrentPrice;
    document.getElementById("price-old").innerHTML = totalOldPrice;
>>>>>>> ceff05f31e894a25d9d2ac7cbd6e1794872ea7c0
  } else {
    document.querySelector(".number").value = 1;
  }
}
