/* ================= NAV ACTIVE SCROLL ================= */

const sections = document.querySelectorAll("section[id], header[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 150) {
      current = sec.id;
    }
  });

  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

/* ================= EMAILJS CONTACT FORM ================= */

// 1️⃣ Initialize EmailJS
(function () {
  emailjs.init("NNpDC_fUDgbXdLHh9"); // <-- from EmailJS dashboard
})();

// 2️⃣ Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  emailjs.sendForm(
    "service_9pzj7xq",   
    "template_rwbjwcj",  
    this
  )
  .then(() => {
    alert("Message sent successfully! 🚀");
    this.reset();
  })
  .catch((error) => {
    alert("Failed to send message ❌");
    console.error("EmailJS Error:", error);
  });
});
