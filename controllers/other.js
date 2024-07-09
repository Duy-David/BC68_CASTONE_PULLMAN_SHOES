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
}
function reduce() {
  if (i > 1) {
    i--;
    console.log(i);
    let totalCurrentPrice = i * currentPrice;
    let totalOldPrice = i * oldPrice;
    document.querySelector(".number").value = i;
    document.getElementById("price-current").innerHTML = totalCurrentPrice;
    document.getElementById("price-old").innerHTML = totalOldPrice;
  } else {
    document.querySelector(".number").value = 1;
  }
}
