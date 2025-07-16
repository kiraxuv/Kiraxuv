// promotion.js (Logic Specific to Promotion Page - promotion.html)

document.addEventListener('DOMContentLoaded', function() {
    const promotionPage = document.querySelector('.promotion-content');
    if (promotionPage) {
        // Handle active state for bottom navigation specific to this page
        const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
        if (bottomNavItems.length > 0) {
            bottomNavItems.forEach(item => item.classList.remove('active'));
            // Set Promotion as active
            document.querySelector('.bottom-nav .nav-item.promotion-center').classList.add('active');
        }

        // Add click listener for Promotion nav item (for when navigating from other pages)
        const promotionNavItem = document.querySelector('.bottom-nav .nav-item.promotion-center');
        if (promotionNavItem) {
            promotionNavItem.addEventListener('click', function(event) {
                // Prevent the default link behavior immediately
                event.preventDefault();

                // Check login status
                if (sessionStorage.getItem('isLoggedIn') !== 'true') {
                    // Redirect to login page if not logged in
                    window.location.href = 'login.html';
                } else {
                    // Explicitly redirect to the promotion page if logged in
                    window.location.href = 'promotion.html';
                }
            });
        }

        // Add any other specific JavaScript logic for the promotion page here
        // For example, if you had dynamic commission updates, copy invitation code functionality etc.
        // Example: Copy Invitation Code functionality
        const copyInvitationCodeItem = document.querySelector('.promotion-action-item:has(.invitation-code)');
        if (copyInvitationCodeItem) {
            copyInvitationCodeItem.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior if it's a dummy link
                const invitationCode = this.querySelector('.invitation-code').textContent;
                navigator.clipboard.writeText(invitationCode)
                    .then(() => {
                        alert('Invitation code copied: ' + invitationCode);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        alert('Failed to copy code. Please try manually.');
                    });
            });
        }

        // You can add more event listeners or logic for other action items here if needed.
    }
});
