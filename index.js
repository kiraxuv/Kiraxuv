// index.js (Logic Specific to Home Page - index.html)

document.addEventListener('DOMContentLoaded', function() {
    const homePageHeader = document.querySelector('.main-header');
    if (homePageHeader) { 
        // Call the common function to update header based on login status
        if (typeof updateHeaderForLoginStatus === 'function') {
            updateHeaderForLoginStatus();
        }
    }
});
