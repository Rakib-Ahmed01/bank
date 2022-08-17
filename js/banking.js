const deposite = document.querySelector(".deposite-amount");
const withdraw = document.querySelector(".withdraw-amount");
const balance = document.querySelector(".balance-amount");
const depositeForm = document.querySelector("#deposite");
const withdrawForm = document.querySelector("#withdraw");
const depositeInput = depositeForm["deposite"];
const withdrawInput = withdrawForm["withdraw"];
const depositeBtn = document.getElementById("deposite-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

let depositeAmount = 0;
let withdrawAmount = 0;
let balanceAmount = 1000;

deposite.innerText = `${depositeAmount}`;
withdraw.innerText = `${withdrawAmount}`;
balance.innerText = `${balanceAmount}`;

depositeBtn.addEventListener("click", (e) => {
  if (isNaN(depositeInput.value) || depositeInput.value < 0) {
    alert("Enter a valid amount");
  } else {
    depositeAmount += +depositeInput.value;
    balanceAmount += +depositeInput.value;
    deposite.innerText = `${depositeAmount}`;
    balance.innerText = `${balanceAmount}`;
  }
  depositeInput.value = "";
  e.preventDefault();
  e.stopPropagation();
});

withdrawBtn.addEventListener("click", (e) => {
  if (withdrawInput.value > balanceAmount) {
    alert(`You do not have $${withdrawInput.value} in your account`);
  } else {
    if (isNaN(withdrawInput.value) || withdrawInput.value < 0) {
      alert("Enter a valid amount");
    } else {
      withdrawAmount += +withdrawInput.value;
      balanceAmount -= +withdrawInput.value;
      withdraw.innerText = `${withdrawAmount}`;
      balance.innerText = `${balanceAmount}`;
    }
  }
  withdrawInput.value = "";
  e.preventDefault();
  e.stopPropagation();
});
