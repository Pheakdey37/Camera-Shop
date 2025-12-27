document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // បញ្ឈប់ form មិនអោយ reload

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ពិនិត្យបញ្ចូល
  if (email === "Pheakdey" && password === "12345") {
    alert("✅ Login successful!");
    window.location.href = '/assiginment.javascript/back-end/index1.html'; // ឲ្យទៅទំព័រ dashboard
  } else {
    alert("❌ Incorrect email or password!");
  }
});