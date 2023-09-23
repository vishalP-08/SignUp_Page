// Function to generate a random 16-byte access token
function generateAccessToken() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 16; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          token += characters[randomIndex];
        }
        return token;
      }
      
      // Function to handle signup
      function signup() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        // Generate access token
        const accessToken = generateAccessToken();
      
        // Store user details and access token in local storage
        const user = {
          name,
          email,
          accessToken
        };
        localStorage.setItem('user', JSON.stringify(user));
      
        // Display success message and redirect to profile page
        const signupMessage = document.getElementById('signup-message');
        signupMessage.innerText = 'Signup successful!';
        document.getElementById('signup-page').style.display = 'none';
        document.getElementById('profile-page').style.display = 'block';
        displayUserProfile();
      }
      
      // Function to display user profile
      function displayUserProfile() {
        const user = JSON.parse(localStorage.getItem('user'));
        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
          <p>Name: ${user.name}</p>
          <p>Email: ${user.email}</p>
          <p>Access Token: ${user.accessToken}</p>
        `;
      }
      
      // Function to handle logout
      function logout() {
        // Clear local storage and redirect to signup page
        localStorage.removeItem('user');
        document.getElementById('profile-page').style.display = 'none';
        document.getElementById('signup-page').style.display = 'block';
      }
      