const loader = document.getElementById("preloader");
const body = document.querySelector("body");
const bistro_text = document.getElementById("bistro-text");
const textarea = document.getElementById("msg");
const emailInput = document.getElementById("email");
window.addEventListener("load", function () {
  body.classList.add("overflow");
  setTimeout(() => {
    body.classList.remove("overflow");
    loader.classList.add("loader-vanish");
    setTimeout(() => {
      loader.remove();
      bistro_text.classList.add("text");
    }, 450);
  }, 250);
});

textarea.addEventListener("input", checkTextarea);

function checkTextarea() {
  const textareaValue = textarea.value.trim();

  if (textareaValue === "") {
    textarea.classList.remove("msg-active");
  } else {
    textarea.classList.add("msg-active");
  }
}

emailInput.addEventListener("input", checkEmail);

function checkEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailInput.classList.remove("msg-active");
  } else {
    emailInput.classList.add("msg-active");
  }
}
