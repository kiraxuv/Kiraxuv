// wallet.js (Logic Specific to Wallet Page - wallet.html)

document.addEventListener('DOMContentLoaded', function() {
    const walletPage = document.querySelector('.wallet-content');
    if (walletPage) {
        const walletTotalBalanceElement = document.getElementById('wallet-total-balance');
        const walletBalanceRefreshIcon = document.getElementById('wallet-balance-refresh-icon'); // Assuming you'll add this icon

        const totalBalance = sessionStorage.getItem('userBalance');

        if (totalBalance && walletTotalBalanceElement) {
            walletTotalBalanceElement.textContent = `₹${parseFloat(totalBalance).toFixed(2)}`;
        } else if (walletTotalBalanceElement) {
            walletTotalBalanceElement.textContent = '₹0.00';
        }

        // Refresh icon functionality for wallet (add an id="wallet-balance-refresh-icon" to your refresh icon in wallet.html)
        if (walletBalanceRefreshIcon) {
            walletBalanceRefreshIcon.addEventListener('click', function() {
                let currentBalance = parseFloat(sessionStorage.getItem('userBalance') || '0.00');
                const newBalance = (currentBalance + (Math.random() * 50 - 25)).toFixed(2);
                sessionStorage.setItem('userBalance', newBalance);
                walletTotalBalanceElement.textContent = `₹${newBalance}`;
                alert('Wallet Balance refreshed!');
            });
        }
    }
});
