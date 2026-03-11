// Check if user is already logged in
if (sessionStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'index.html';
}

// Demo credentials
const validCredentials = {
    admin: 'password',
    user: '1234',
    guest: 'guest'
};

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Validate credentials
    if (validCredentials[username] && validCredentials[username] === password) {
        // Store login state
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Redirect to home page first
        window.location.href = 'home.html';
    } else {
        // Show error message
        errorMessage.classList.add('show');
        
        // Hide error after 3 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
});

// Guest login function
function loginAsGuest() {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', 'Guest');
    window.location.href = 'home.html';
}

// Show signup form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.signup-section').style.display = 'none';
    document.querySelector('.demo-info').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Show login form
function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.querySelector('.signup-section').style.display = 'block';
    document.querySelector('.demo-info').style.display = 'block';
}

// Handle signup
function handleSignup() {
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Reset messages
    document.getElementById('errorMessage').classList.remove('show');
    document.getElementById('successMessage').classList.remove('show');
    
    // Validation
    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = 'Passwords do not match!';
        document.getElementById('errorMessage').classList.add('show');
        return;
    }
    
    if (password.length < 6) {
        document.getElementById('errorMessage').textContent = 'Password must be at least 6 characters long!';
        document.getElementById('errorMessage').classList.add('show');
        return;
    }
    
    // Store new user (in real app, this would be sent to server)
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    users[username] = {
        email: email,
        password: password
    };
    localStorage.setItem('users', JSON.stringify(users));
    
    // Add to valid credentials for immediate login
    validCredentials[username] = password;
    
    // Show success message
    document.getElementById('successMessage').textContent = 'Account created successfully! You can now login.';
    document.getElementById('successMessage').classList.add('show');
    
    // Switch to login form after 2 seconds
    setTimeout(() => {
        showLogin();
        document.getElementById('successMessage').classList.remove('show');
    }, 2000);
}

// Add enter key support for guest login
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        loginAsGuest();
    }
});
