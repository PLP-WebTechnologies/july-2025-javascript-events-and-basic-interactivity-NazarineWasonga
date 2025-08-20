// Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});

// Part 2: Interactive Features

// 1. Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// 3. Collapsible FAQ
const faqTitle = document.getElementById("faqTitle");
const faqContent = document.getElementById("faqContent");

faqTitle.addEventListener("click", () => {
  faqContent.style.display = faqContent.style.display === "none" ? "block" : "none";
});

// Part 3: Form Validation
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validations
  if (name.length < 3) {
    formMessage.textContent = "⚠️ Name must be at least 3 characters.";
    formMessage.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "⚠️ Enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If all validations pass
  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";
  signupForm.reset();
});

