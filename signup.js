// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signupErrorMessage = document.getElementById('signup-error-message');
    const successMessage = document.getElementById('success-message');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user details from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate the form fields (you can add more validation)
        if (!name || !email || !password || !confirmPassword) {
            displayErrorMessage('All fields are mandatory!');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            displayErrorMessage('Error: Passwords do not match!');
            return;
        }

        // Generate a random access token (16-byte string)
        const accessToken = generateRandomToken();

        // Store user details and access token in local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Display success message
        displaySuccessMessage('Signup successful! Redirecting to your profile...');

        // Redirect to the Profile page after a short delay
        setTimeout(function () {
            window.location.href = 'profile.html';
        }, 2000);
    });

    function generateRandomToken() {
        // Generate a random 16-byte string (you may use a more secure method)
        return Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
    }

    function displayErrorMessage(message) {
        signupErrorMessage.textContent = message;
    }

    function displaySuccessMessage(message) {
        successMessage.innerHTML = `<p>${message}</p>`;
        successMessage.style.display = 'block';
    }
});
