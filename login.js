// login.js (Logic Specific to Login Page - login.html)

document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.querySelector('.login-container');

    if (loginContainer) {
        // Call common function to update header on page load
        if (typeof updateHeaderForLoginStatus === 'function') {
            updateHeaderForLoginStatus();
        }

        const tabs = document.querySelectorAll('.tab-selector .tab');
        const loginSections = document.querySelectorAll('.login-section');
        const tabSelector = document.querySelector('.tab-selector'); 

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                loginSections.forEach(section => section.style.display = 'none');
                this.classList.add('active');
                const targetTab = this.getAttribute('data-tab');
                document.getElementById(`${targetTab}-login-section`).style.display = 'block';
                tabSelector.style.setProperty('--_tab-transform-x', `${index * 100}%`); 
            });
        });

        const initialActiveTab = document.querySelector('.tab-selector .tab.active');
        if (initialActiveTab) {
            const initialIndex = Array.from(tabs).indexOf(initialActiveTab);
            tabSelector.style.setProperty('--_tab-transform-x', `${initialIndex * 100}%`);
        }
        
        const registerBtn = document.querySelector('.register-btn');
        if (registerBtn) {
            registerBtn.addEventListener('click', function() {
                window.location.href = 'register.html'; 
            });
        }

        const loginMainBtn = document.querySelector('.login-btn');
        if (loginMainBtn) {
            loginMainBtn.addEventListener('click', function(event) {
                event.preventDefault();

                let phoneNumberOrUid;
                let password;
                
                const activeTab = document.querySelector('.tab.active').getAttribute('data-tab');
                if (activeTab === 'phone') {
                    phoneNumberOrUid = document.getElementById('phone-number').value;
                    password = document.getElementById('password').value;
                } else {
                    phoneNumberOrUid = document.getElementById('uid').value;
                    password = document.getElementById('uid-password').value;
                }

                if (!phoneNumberOrUid || !password) {
                    alert('Please enter your phone/UID and password.');
                    return;
                }

                alert('Login attempt with: ' + phoneNumberOrUid + ' and password: ' + password + ' (This is a demo. Data would be sent to server.)');
                // Simulate successful login and redirect
                sessionStorage.setItem('isLoggedIn', 'true'); // Set a flag in session storage
                sessionStorage.setItem('loggedInUID', phoneNumberOrUid); // Store the UID/phone number
                sessionStorage.setItem('userBalance', '0.00'); // Set initial balance for new login
                window.location.href = 'index.html'; // Redirect to homepage
            });
        }
    }
});
