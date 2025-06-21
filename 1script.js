document.getElementById('register-btn').addEventListener('click', function() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simple registration logic (you can expand this)
    if (username && email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        document.getElementById('reg-message').innerText = "Registration successful! Please log in.";
        document.getElementById('register-form').classList.add('hidden');
        document.getElementById('login-form').classList.remove('hidden');
    } else {
        document.getElementById('reg-message').innerText = "Please fill in all fields.";
    }
});

document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const registeredEmail = localStorage.getItem('userEmail');
    const registeredPassword = localStorage.getItem('userPassword');

    // Check if email is valid and matches registered email
    if (email.endsWith('@paruluniversity.ac.in') && email === registeredEmail && password === registeredPassword) {
        document.getElementById('login-message').innerText = "Login successful!";
        // Redirect or show a welcome message
    } else {
        document.getElementById('login-message').innerText = "Invalid email or password.";
    }
});

// Show login form
document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Show register form
document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});


