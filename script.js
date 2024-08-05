document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formStatus = document.getElementById('form-status');

    if (name && email && message) {
        formStatus.innerText = 'Thank you for your message!';
        formStatus.style.color = 'green';
        this.reset();
    } else {
        formStatus.innerText = 'Please fill in all fields.';
        formStatus.style.color = 'red';
    }
});
