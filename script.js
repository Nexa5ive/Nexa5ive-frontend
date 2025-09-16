    window.addEventListener("load", () => {
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 3000); // slightly more than animation time
    });

    async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://nexa5ive.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
        event.target.reset();
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      alert("⚠️ Error connecting to server.");
      console.error(error);
    }
  }
  const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

});
