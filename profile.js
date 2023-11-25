// profile.js

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-btn');

    // Check if the user is logged in (has an access token)
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        // Redirect to the Signup page if not logged in
        window.location.href = 'signup.html';
    }

    // Display user details on the Profile page
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const tokenElement = document.getElementById('token');
    const passwordElement = document.getElementById('password');

    nameElement.textContent = localStorage.getItem('name');
    emailElement.textContent = localStorage.getItem('email');
    tokenElement.textContent = accessToken;

    // Display the actual password
    passwordElement.textContent = localStorage.getItem('password');

    // Logout button click event
    logoutButton.addEventListener('click', function () {
        // Clear local storage
        localStorage.clear();

        // Redirect to the Signup page
        window.location.href = 'signup.html';
    });
});
