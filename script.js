const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const code = document.getElementById("accessCode").value;

  if (code.length < 4) {
    alert("کد دسترسی معتبر نیست");
    return;
  }

  document.querySelector("button").innerHTML = "در حال ورود ...";

  setTimeout(() => {
    window.location.href = "products.html";
  }, 1000);
});
