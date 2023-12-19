document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');
    const moonIcon = document.querySelector('.moon');
    const sunIcon = document.querySelector('.sun');

    modeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            moonIcon.style.transform = 'translate(-50%, -50%) scale(0)';
            sunIcon.style.transform = 'translate(-50%, -50%) scale(1)';
        } else {
            moonIcon.style.transform = 'translate(-50%, -50%) scale(1)';
            sunIcon.style.transform = 'translate(-50%, -50%) scale(0)';
        }
    });
});
