document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');

    modeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});
