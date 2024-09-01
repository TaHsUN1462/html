let select = document.getElementById('select');
let resultStatus = document.getElementById('resultStatus');
let resultValue = document.getElementById('resultValue');
let label1 = document.getElementById('label1');
let label2 = document.getElementById('label2');
function calculate() {
if (select.value === "kTp") {
KtP();
}else if (select.value === "pTg"){
PtG();
}else if(select.value === "gTpk"){
GtPK();
}else{
alert("ভুল সংখ্যা")
}
}
function Status() {
if (select.value === "kTp") {
resultStatus.innerText = "মোট দাম "
label1.innerText = "গ্রাম";
label2.innerText = "প্রতি কেজি দাম";
document.getElementById('firstValue').value = "";
document.getElementById('lastValue').value = "";
resultValue.innerText = "";
}else if (select.value === "pTg"){
resultStatus.innerText = "প্রাপ্য ওজন "
label1.innerText = "মোট দাম"
label2.innerText = "প্রতি কেজি দাম";
document.getElementById('firstValue').value = "";
document.getElementById('lastValue').value = "";
resultValue.innerText = "";
}else if(select.value === "gTpk"){
resultStatus.innerText = "প্রতি কেজি দাম "
label1.innerText = "গ্রাম";
label2.innerText = "মোট দাম";
document.getElementById('firstValue').value = "";
document.getElementById('lastValue').value = "";
resultValue.innerText = "";
}else {
  resultStatus.innerText = "";
label1.innerText = "";
label2.innerText = "";
document.getElementById('firstValue').value = "";
document.getElementById('lastValue').value = "";
resultValue.innerText = "";
}
}
function KtP() {
let firstValue = parseFloat(document.getElementById("firstValue").value);
let lastValue = parseFloat(document.getElementById("lastValue").value);
if (isNaN(firstValue) || isNaN(lastValue)){
  resultValue.innerText = "";
}else {
  resultValue.innerText = (firstValue / 1000 * lastValue).toFixed(2) + " UvKv";
}
}
function PtG() {
let firstValue = parseFloat(document.getElementById("firstValue").value);
let lastValue = parseFloat(document.getElementById("lastValue").value);
if (isNaN(firstValue) || isNaN(lastValue)){
  resultValue.innerText = "";
}else {
resultValue.innerText = (firstValue / lastValue * 1000).toFixed(2) + " MÖvg";
}
}
function GtPK() {
let firstValue = parseFloat(document.getElementById("firstValue").value);
let lastValue = parseFloat(document.getElementById("lastValue").value);
if (isNaN(firstValue) || isNaN(lastValue)){
  resultValue.innerText = "";
}else {
resultValue.innerText = (lastValue / (firstValue / 1000)).toFixed(2) + " UvKv";
}
}