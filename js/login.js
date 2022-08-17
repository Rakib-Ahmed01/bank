const form = document.getElementById("form");
const email = form["email"];
const password = form["password"];
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  console.log(email.value);
  console.log(password.value);
  if (email.value === "manush@gmail.com" && password.value === "12345") {
    console.log(true);
    window.location.assign("banking.html");
  } else {
    alert("Enter Valid Email & Password.");
  }
});
