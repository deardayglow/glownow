
"use strict";
const form = document.getElementById("sms-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let thisForm = this;

        
        thisForm.querySelector(".loading").classList.add("d-block");
        thisForm.querySelector(".error-message").classList.remove("d-block");
        thisForm.querySelector(".sent-message").classList.remove("d-block");
  const t = new FormData(form),
    s = new XMLHttpRequest();
  s.open("POST", "https://formspree.io/f/xgedyeya"),
    s.setRequestHeader("Accept", "application/json"),
    (s.onload = () => {
      200 === s.status
        ? (document.querySelector(".loading").classList.remove("d-block"),
          document.querySelector(".sent-message").classList.add("d-block"),
          form.reset())
        : (document.querySelector(".loading").classList.remove("d-block"),
         
          document.querySelector(".error-message").classList.add("d-block"));
    }),
    s.send(t);
});
