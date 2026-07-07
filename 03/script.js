document.addEventListener('DOMContentLoaded', () => {
    // Fade-in trigger
    const homeFrame = document.querySelector('.home-frame');
    if (homeFrame) {
        // Force a small delay for better visual vibe
        setTimeout(() => {
            homeFrame.classList.add('visible');
        }, 100);
    }

    // Interactive feedback for buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.opacity = '0.5';
        });
        btn.addEventListener('touchend', () => {
            btn.style.opacity = '1';
        });
    });

    console.log('Figma 100% Match initialized.');
});
