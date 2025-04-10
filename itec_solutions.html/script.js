(function() {
    emailjs.init('7xwDnmc1ZNWmtG3rx'); // Replace with your EmailJS user ID
  })();

  function sendMail(e) {
    e.preventDefault();
    emailjs.send("service_c8074xa", "template_gwbjkvl", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      to_email: "itacsolution001@gmail.com"ss
    })
    .then(function(response) {
      alert("Message sent successfully!");
      document.querySelector("form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again later.");
    });
  }