// account.js (Logic Specific to Account Page - account.html)

document.addEventListener('DOMContentLoaded', function() {
    const accountPage = document.querySelector('.account-content');
    if (accountPage) {
        const loggedInUID = sessionStorage.getItem('loggedInUID');
        const totalBalance = sessionStorage.getItem('userBalance');
        const accountUserIdElement = document.getElementById('account-user-id');
        const totalBalanceElement = document.getElementById('total-balance');
        const lastLoginInfoElement = document.getElementById('last-login-info');
        const balanceRefreshIcon = document.getElementById('balance-refresh-icon');
        const logoutButton = document.getElementById('logout-button');

        if (loggedInUID && accountUserIdElement) {
            accountUserIdElement.textContent = loggedInUID;
        }

        if (totalBalance && totalBalanceElement) {
            totalBalanceElement.textContent = `₹${parseFloat(totalBalance).toFixed(2)}`;
        } else if (totalBalanceElement) {
            totalBalanceElement.textContent = '₹0.00';
        }

        // Set last login time (current time when reaching the account page)
        if (lastLoginInfoElement) {
            const now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            lastLoginInfoElement.textContent = `Last Login: ${year}-${month}-${day} ${hours}:${minutes}:00`;
        }

        // Refresh balance functionality (simple demo)
        if (balanceRefreshIcon) {
            balanceRefreshIcon.addEventListener('click', function() {
                let currentBalance = parseFloat(sessionStorage.getItem('userBalance') || '0.00');
                const newBalance = (currentBalance + (Math.random() * 50 - 25)).toFixed(2);
                sessionStorage.setItem('userBalance', newBalance);
                totalBalanceElement.textContent = `₹${newBalance}`;
                alert('Balance refreshed!');
            });
        }

        // Logout button functionality
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('loggedInUID');
                sessionStorage.removeItem('userBalance');
                alert('You have been logged out.');
                window.location.href = 'index.html';
            });
        }
    }
});
