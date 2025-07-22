function sub() {
    // Retrieve form input values
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();
  
    // Simple validations (you can add more complex validations)
    if (email !== '' && name !== '' && subject !== '' && message !== '' ) {
        alert("Your message has been sent successfully.")

    } else {

    }
  }