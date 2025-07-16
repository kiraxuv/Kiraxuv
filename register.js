// register.js (Logic Specific to Registration Page - register.html)

document.addEventListener('DOMContentLoaded', function() {
    const registrationContainer = document.querySelector('.registration-container');
    if (registrationContainer) {
        // Call common function to update header on page load
        if (typeof updateHeaderForLoginStatus === 'function') {
            updateHeaderForLoginStatus();
        }

        const registerMainBtn = document.querySelector('.register-main-btn');
        if (registerMainBtn) {
            registerMainBtn.addEventListener('click', function(event) {
                event.preventDefault();

                const phoneNumber = document.getElementById('reg-phone-number').value;
                const setPassword = document.getElementById('set-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                const inviteCode = document.getElementById('invite-code').value;
                const privacyChecked = document.querySelector('.privacy-agreement input[type="checkbox"]').checked;

                if (!phoneNumber || !setPassword || !confirmPassword) {
                    alert('Please fill in all required fields.');
                    return;
                }

                if (setPassword !== confirmPassword) {
                    alert('Passwords do not match.');
                    return;
                }

                if (!privacyChecked) {
                    alert('Please read and agree to the Privacy Agreement.');
                    return;
                }

                alert('Registration successful! (This is a demo. Data would be sent to server for creation.)');
                // Simulate successful registration and redirect
                sessionStorage.setItem('isLoggedIn', 'true'); // Set a flag in session storage
                sessionStorage.setItem('loggedInUID', phoneNumber); // Store the phone number as UID
                sessionStorage.setItem('userBalance', '0.00'); // Set initial balance for new registration
                window.location.href = 'index.html'; // Redirect to homepage
            });
        }
        const loginFromRegisterBtn = document.querySelector('.login-from-register-btn');
        if (loginFromRegisterBtn) {
            loginFromRegisterBtn.setAttribute('href', 'login.html');
        }
    }
});
