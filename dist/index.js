setTimeout(() => {
    const heroText = document.querySelector('.hero-text');
    const mainContent = document.getElementById('mainContent');

    // Start fade out for hero text
    heroText.classList.remove('opacity-100');
    heroText.classList.add('opacity-0');

    heroText.addEventListener('transitionend', function handler() {
        // Remove event listener to ensure it runs only once
        heroText.removeEventListener('transitionend', handler);

        // Hide the hero text
        heroText.classList.add('hidden');


        // Display main content and start fade-in
        mainContent.classList.remove('hidden');

        // smoother transition; forces a reflow/repaint
        void mainContent.offsetWidth;

        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('opacity-100');
    });
}, 3000); // 3 seconds delay before the transition starts
