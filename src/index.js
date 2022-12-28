import "./styles.css";

const firstin = document.querySelector("#input1");
const secondin = document.querySelector("#input2");
const result = document.querySelector("textarea");
document.getElementById("app").innerHTML = `
<h1>Hello friend !</h1>

<div>
This functions as a calculator application

</div>`;

document.querySelector("#add").addEventListener("click", function addition() {
  result.innerText = Number(firstin.value) + Number(secondin.value);
  console.log(firstin.value + secondin.value);
});
document
  .querySelector("#sub")
  .addEventListener("click", function subtraction() {
    result.innerText = Number(firstin.value) - Number(secondin.value);
  });
document
  .querySelector("#multi")
  .addEventListener("click", function multiplication() {
    result.innerText = Number(firstin.value) * Number(secondin.value);
  });
document.querySelector("#div").addEventListener("click", function division() {
  result.innerText = Number(firstin.value) / Number(secondin.value);
});
