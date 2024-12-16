document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! We have received your message:\n"${message}"`);
});
