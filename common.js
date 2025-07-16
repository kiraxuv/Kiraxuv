// common.js (Common Code for All Pages)

document.addEventListener('DOMContentLoaded', function() {

    // --- Common Function: Password Toggle functionality ---
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordInput = this.closest('.input-wrapper').querySelector('input[type="password"], input[type="text"]');
            
            if (passwordInput) {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            }
        });
    });

    // --- Handle active state for bottom navigation and Account/Wallet page redirection ---
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    if (bottomNavItems.length > 0) {
        const currentPage = window.location.pathname.split('/').pop();

        // Remove active class from all items first
        bottomNavItems.forEach(item => item.classList.remove('active'));

        // Determine which item should be active based on the current page
        if (currentPage === '' || currentPage === 'index.html') {
            document.querySelector('.bottom-nav .nav-item:nth-child(1)').classList.add('active'); // Home
        } else if (currentPage === 'activity.html') {
            document.querySelector('.bottom-nav .nav-item:nth-child(2)').classList.add('active'); // Activity
        } else if (currentPage === 'wallet.html') {
            document.querySelector('.bottom-nav .nav-item:nth-child(4)').classList.add('active'); // Wallet
        } else if (currentPage === 'account.html') {
            document.querySelector('.bottom-nav .nav-item:nth-child(5)').classList.add('active'); // Account
        }

        // Add click listener for Account nav item
        const accountNavItem = document.querySelector('.bottom-nav .nav-item:nth-child(5)');
        if (accountNavItem) {
            accountNavItem.addEventListener('click', function(event) {
                // Check login status
                if (sessionStorage.getItem('isLoggedIn') !== 'true') {
                    event.preventDefault(); // Stop the default link behavior
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    window.location.href = 'account.html';
                }
            });
        }

        // Add click listener for Wallet nav item
        const walletNavItem = document.querySelector('.bottom-nav .nav-item:nth-child(4)');
        if (walletNavItem) {
            walletNavItem.addEventListener('click', function(event) {
                // Check login status
                if (sessionStorage.getItem('isLoggedIn') !== 'true') {
                    event.preventDefault(); // Stop the default link behavior
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    window.location.href = 'wallet.html';
                }
            });
        }
    }
    
            // Add click listener for Promotion nav item
        const promotionNavItem = document.querySelector('.bottom-nav .nav-item.promotion-center');
        if (promotionNavItem) {
            promotionNavItem.addEventListener('click', function(event) {
                // Check login status
                if (sessionStorage.getItem('isLoggedIn') !== 'true') {
                    event.preventDefault(); // Stop the default link behavior
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    window.location.href = 'promotion.html'; // Redirect to promotion page
                }
            });
        }


    // --- Function to update header based on login status (for homepage, login, register) ---
    // This function will be called by specific page scripts if needed
    window.updateHeaderForLoginStatus = function() {
        const headerRight = document.querySelector('.main-header .header-right');
        // Check for specific headers on login/register pages
        const loginRegisterHeader = document.querySelector('.header'); 

        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            if (headerRight) { // For index.html
                headerRight.innerHTML = ''; 
                const flagIcon = document.createElement('span');
                flagIcon.classList.add('flag-icon');
                flagIcon.innerHTML = '<img src="assets/ind.jpg" alt="User Flag">'; 
                headerRight.appendChild(flagIcon);
            }
            if (loginRegisterHeader) { // For login.html and register.html
                loginRegisterHeader.innerHTML = `
                    <a href="index.html" class="back-arrow register-back-arrow"><i class="fas fa-arrow-left"></i></a>
                    <span class="flag-icon"><img src="assets/ind.jpg" alt="User Flag"></span>
                `;
            }
        } else {
            if (headerRight) { // For index.html
                headerRight.innerHTML = `
                    <span class="flag-icon"><img src="assets/ind.jpg" alt="US Flag"></span>
                    <a href="login.html" class="btn header-btn-login">Login</a>
                    <a href="register.html" class="btn header-btn-register">Register</a>
                `;
            }
            if (loginRegisterHeader) { // For login.html and register.html
                loginRegisterHeader.innerHTML = `
                    <a href="index.html" class="back-arrow register-back-arrow"><i class="fas fa-arrow-left"></i></a>
                    <span class="flag-icon"><img src="assets/ind.jpg" alt="US Flag"></span>
                `;
            }
        }
    };
});
