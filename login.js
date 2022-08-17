const form = document.getElementById("form");
const email = form["email"];
const password = form["password"];
const submitBtn = document.getElementById("submit-btn");

// function validate() {
//   if (email.value === "manush@gmail.com" && password.value === "12345") {
//     window.location.href = "http://127.0.0.1:5500/banking.html";
//   } else {
//     alert("Enter Valid Email & Password.");
//   }
// }

// form.addEventListener("submit", () => {
//   console.log(email.value);
//   console.log(password.value);
//   if (email.value === "manush@gmail.com" || password.value === "12345") {
//     window.location.href = "../banking.html";
//   } else {
//     alert("Enter Valid Email & Password.");
//   }
// });
submitBtn.addEventListener("click", () => {
  console.log(email.value);
  console.log(password.value);
  if (email.value === "manush@gmail.com" && password.value === "12345") {
    console.log(true);
    window.location.assign("./banking.html");
  } else {
    alert("Enter Valid Email & Password.");
  }
});
