window.onscroll = function() {
  let btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkAnswer() {
  const selected = document.getElementById("quizAnswer").value;
  const feedback = document.getElementById("quizFeedback");

  if (selected === "red") {
    feedback.innerText = "✅ Correct! Batteries are hazardous waste.";
    feedback.style.color = "green";
  } else if (selected) {
    feedback.innerText = "❌ Incorrect. Try again!";
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Please select an answer.";
    feedback.style.color = "gray";
  }
}

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

window.onload = () => {
  animateValue("cleanupCount", 0, 25, 2000);
  animateValue("wasteKg", 0, 3200, 2000);
};

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Thanks for contacting us! We'll get back to you soon.");
      this.reset();
    });
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const page = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href.includes(page)) {
    link.style.fontWeight = "bold";
    link.style.borderBottom = "2px solid #2ecc71";
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: store user's preference
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Optional: load saved preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
}
